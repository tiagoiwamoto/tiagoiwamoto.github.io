const https = require('https');
const axios = require('axios');

// URL base da API
const API_BASE = 'http://144.91.72.60:7000';

// Ignorar SSL inválido
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports = async (req, res) => {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder OPTIONS para CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Extrair endpoint da query
    const { endpoint } = req.query;

    if (!endpoint) {
      res.status(400).json({ error: 'Endpoint não especificado' });
      return;
    }

    // Fazer requisição para API original
    const response = await axios.get(`${API_BASE}/${endpoint}`, {
      httpsAgent: agent,
      timeout: 10000
    });

    // Retornar dados
    res.status(200).json(response.data);

  } catch (error) {
    console.error('Erro no proxy:', error.message);
    res.status(500).json({
      error: 'Erro ao conectar com API',
      message: error.message
    });
  }
};

