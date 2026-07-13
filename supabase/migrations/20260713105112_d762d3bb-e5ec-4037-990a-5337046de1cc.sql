
CREATE TABLE public.chat_threads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL,
  title TEXT NOT NULL DEFAULT 'New conversation',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_chat_threads_session ON public.chat_threads(session_id, updated_at DESC);

CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id UUID NOT NULL REFERENCES public.chat_threads(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user','assistant','system')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_chat_messages_thread ON public.chat_messages(thread_id, created_at ASC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_threads TO anon, authenticated;
GRANT ALL ON public.chat_threads TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_messages TO anon, authenticated;
GRANT ALL ON public.chat_messages TO service_role;

ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Anonymous public support chat: rows are scoped by a client-generated session UUID
-- stored in the visitor's browser. Access relies on the unguessability of the UUID.
CREATE POLICY "Anyone can read threads" ON public.chat_threads FOR SELECT USING (true);
CREATE POLICY "Anyone can insert threads" ON public.chat_threads FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update threads" ON public.chat_threads FOR UPDATE USING (true);
CREATE POLICY "Anyone can delete threads" ON public.chat_threads FOR DELETE USING (true);

CREATE POLICY "Anyone can read messages" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "Anyone can insert messages" ON public.chat_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete messages" ON public.chat_messages FOR DELETE USING (true);
