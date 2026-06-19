// Vercel Serverless Function — Claude Haiku API proxy
// Set ANTHROPIC_API_KEY in Vercel → Settings → Environment Variables

const ALLOWED_ORIGINS = [
  'https://deutsch-jetzt.vercel.app',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:8888'
];

module.exports = async (req, res) => {
  const origin = req.headers.origin || '';
  const allowed = ALLOWED_ORIGINS.some(o => origin.startsWith(o)) || origin === '';

  res.setHeader('Access-Control-Allow-Origin', allowed ? origin || '*' : 'null');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const body = req.body || {};
    if (!body.messages || !Array.isArray(body.messages)) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    if (body.messages.length > 25) {
      return res.status(400).json({ error: 'Too many messages' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: Math.min(body.max_tokens || 1000, 2000),
        system: body.system || '',
        messages: body.messages
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Claude API error:', response.status, err);
      return res.status(502).json({ error: 'AI service temporarily unavailable' });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (e) {
    console.error('Proxy error:', e.message);
    return res.status(500).json({ error: 'Internal error' });
  }
};
