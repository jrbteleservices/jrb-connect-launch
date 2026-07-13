import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, Plus, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

type Thread = { id: string; title: string; updated_at: string };
type Message = { id: string; role: "user" | "assistant"; content: string };

const SESSION_KEY = "jrb_support_session_id";
const ACTIVE_KEY = "jrb_support_active_thread";

function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

const CHAT_ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/support-chat`;

const SupportChat = () => {
  const [open, setOpen] = useState(false);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionId = useMemo(() => getSessionId(), []);

  useEffect(() => {
    loadThreads();
    const stored = localStorage.getItem(ACTIVE_KEY);
    if (stored) setActiveId(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeId) {
      localStorage.setItem(ACTIVE_KEY, activeId);
      loadMessages(activeId);
    } else {
      setMessages([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  async function loadThreads() {
    const { data } = await supabase
      .from("chat_threads")
      .select("id,title,updated_at")
      .eq("session_id", sessionId)
      .order("updated_at", { ascending: false });
    setThreads(data ?? []);
  }

  async function loadMessages(threadId: string) {
    const { data } = await supabase
      .from("chat_messages")
      .select("id,role,content")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true });
    setMessages((data as Message[]) ?? []);
  }

  async function createThread(): Promise<string | null> {
    const { data, error } = await supabase
      .from("chat_threads")
      .insert({ session_id: sessionId, title: "New conversation" })
      .select("id,title,updated_at")
      .single();
    if (error || !data) return null;
    setThreads((t) => [data, ...t]);
    setActiveId(data.id);
    setMessages([]);
    return data.id;
  }

  async function deleteThread(id: string) {
    await supabase.from("chat_threads").delete().eq("id", id);
    setThreads((t) => t.filter((x) => x.id !== id));
    if (activeId === id) {
      setActiveId(null);
      localStorage.removeItem(ACTIVE_KEY);
    }
  }

  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");

    let threadId = activeId;
    if (!threadId) threadId = await createThread();
    if (!threadId) return;

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setSending(true);

    await supabase.from("chat_messages").insert({ thread_id: threadId, role: "user", content: text });

    // Update title from first user message
    const isFirst = messages.length === 0;
    if (isFirst) {
      const title = text.length > 40 ? text.slice(0, 40) + "…" : text;
      await supabase.from("chat_threads").update({ title, updated_at: new Date().toISOString() }).eq("id", threadId);
      setThreads((ts) => ts.map((t) => (t.id === threadId ? { ...t, title } : t)));
    }

    const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error("Chat request failed");

      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      let assistant = "";
      const assistantId = crypto.randomUUID();
      setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += value;
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const l = line.trim();
          if (!l.startsWith("data:")) continue;
          const data = l.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content ?? "";
            if (delta) {
              assistant += delta;
              setMessages((m) => m.map((x) => (x.id === assistantId ? { ...x, content: assistant } : x)));
            }
          } catch {
            /* skip malformed frame */
          }
        }
      }

      if (assistant) {
        await supabase.from("chat_messages").insert({ thread_id: threadId, role: "assistant", content: assistant });
        await supabase.from("chat_threads").update({ updated_at: new Date().toISOString() }).eq("id", threadId);
        loadThreads();
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary shadow-elegant flex items-center justify-center text-white hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[70vh] max-h-[600px] bg-background border border-border rounded-2xl shadow-elegant flex overflow-hidden">
          {/* Thread list */}
          <div className="w-32 sm:w-40 border-r border-border bg-muted/30 flex flex-col">
            <div className="p-2 border-b border-border">
              <Button size="sm" variant="hero" className="w-full text-xs" onClick={createThread}>
                <Plus className="w-3 h-3" /> New
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {threads.length === 0 && (
                <p className="text-xs text-muted-foreground p-3">No chats yet</p>
              )}
              {threads.map((t) => (
                <div
                  key={t.id}
                  className={cn(
                    "group flex items-center gap-1 px-2 py-2 text-xs cursor-pointer hover:bg-accent/20 border-l-2",
                    activeId === t.id ? "bg-accent/20 border-primary" : "border-transparent"
                  )}
                  onClick={() => setActiveId(t.id)}
                >
                  <span className="truncate flex-1">{t.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteThread(t.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                    aria-label="Delete conversation"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="p-3 bg-gradient-primary text-white">
              <h3 className="font-semibold text-sm">JRB Support</h3>
              <p className="text-xs text-white/80">We usually reply instantly</p>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.length === 0 && !sending && (
                <div className="text-sm text-muted-foreground text-center mt-8">
                  👋 Hi! Ask us anything about JRB Tele Services.
                </div>
              )}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap break-words",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    )}
                  >
                    {m.content || <Loader2 className="w-4 h-4 animate-spin" />}
                  </div>
                </div>
              ))}
              {sending && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl px-3 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="p-2 border-t border-border flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={sending}
              />
              <Button type="submit" size="icon" variant="hero" disabled={sending || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportChat;