import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { messages } = (await req.json()) as { messages: Msg[] };
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'messages must be an array' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Missing LOVABLE_API_KEY' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt =
      'You are the customer support assistant for JRB Tele Services, a Mumbai-based voice contact center founded in 2015 with 25+ agents and 10+ years serving Fortune clients. Services include inbound and outbound call center solutions. Be warm, concise, and helpful. If a question is out of scope (pricing, custom quotes, hiring), politely invite the visitor to use the contact form on the site.';

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        stream: true,
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return new Response(JSON.stringify({ error: 'AI gateway error', status: response.status, details: text }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});