# Proxy Vercel para API sem SSL

Este proxy resolve o problema de CORS e SSL inválido quando o GitHub Pages (HTTPS) tenta acessar uma API HTTP sem certificado válido.

## Deploy para Vercel

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Entre na pasta do proxy:
```bash
cd proxy-vercel
```

3. Deploy:
```bash
vercel
```

4. Siga as instruções do Vercel CLI
   - Confirme que é um novo projeto
   - Aceite as configurações padrão
   - Aguarde o deploy

5. Após o deploy, você receberá uma URL como:
   `https://seu-projeto.vercel.app`

6. Atualize o `index.html` com a URL do proxy:
```javascript
const API_PROXY = 'https://seu-projeto.vercel.app/api';
```

## Como funciona

O proxy recebe requisições do GitHub Pages e as encaminha para a API HTTP, ignorando erros de SSL:

- GitHub Pages (HTTPS) → Vercel Proxy (HTTPS) → API HTTP (sem SSL)
- O navegador só vê comunicação HTTPS
- O proxy ignora certificados SSL inválidos

## Endpoints

- `/api?endpoint=cursos` - Lista de cursos
- `/api?endpoint=escolaridades` - Histórico acadêmico
- `/api?endpoint=certificacoes` - Certificações profissionais

## Desenvolvimento Local

Para testar localmente:

```bash
npm install
vercel dev
```

Acesse: `http://localhost:3000/api?endpoint=cursos`

