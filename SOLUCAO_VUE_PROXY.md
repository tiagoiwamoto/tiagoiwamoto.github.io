# Solução Completa - Vue.js + Proxy para SSL

## Problema Resolvido

O portfólio está hospedado no **GitHub Pages (HTTPS)** e precisa consumir dados de uma API HTTP sem certificado SSL válido em `http://144.91.72.60:7000`. 

Navegadores bloqueiam requisições de páginas HTTPS para APIs HTTP (mixed content) e também bloqueiam certificados SSL inválidos.

## Solução Implementada

### 1. **Migração para Vue.js 3 (via CDN)**
   - Código refatorado para usar Vue.js 3
   - Gerenciamento reativo de estado
   - Componentes mais organizados e manuteníveis
   - Axios para requisições HTTP

### 2. **Proxy Vercel**
   - Proxy serverless hospedado no Vercel
   - Aceita requisições HTTPS do GitHub Pages
   - Faz requisições HTTP para a API ignorando SSL
   - Resolve CORS automaticamente

## Arquitetura

```
GitHub Pages (HTTPS)
    ↓
Vercel Proxy (HTTPS) [ignora SSL]
    ↓
API Backend (HTTP sem SSL)
```

## Passos para Usar

### 1. Deploy do Proxy Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Ir para a pasta do proxy
cd proxy-vercel

# Fazer o deploy
vercel

# Seguir as instruções e copiar a URL gerada
```

### 2. Configurar a URL do Proxy

Após o deploy, você receberá uma URL como:
`https://portfolio-proxy-xyz.vercel.app`

Edite o arquivo `index.html` e atualize a variável:

```javascript
const API_PROXY = 'https://portfolio-proxy-xyz.vercel.app/api';
```

### 3. Deploy no GitHub Pages

```bash
git add .
git commit -m "Adiciona Vue.js e proxy para SSL"
git push origin main
```

O GitHub Pages irá atualizar automaticamente.

## Endpoints da API

O proxy suporta os seguintes endpoints:

- **Cursos**: `https://seu-proxy.vercel.app/api?endpoint=cursos`
- **Escolaridades**: `https://seu-proxy.vercel.app/api?endpoint=escolaridades`
- **Certificações**: `https://seu-proxy.vercel.app/api?endpoint=certificacoes`

## Funcionalidades Implementadas

### ✅ Cursos
- Carrossel com 3 cursos por página
- Filtro por categoria
- Ordenação por data (mais recente primeiro)
- Estatísticas: total de cursos, categorias e horas
- Lightbox para visualizar certificados
- Suporte a touch/swipe em mobile

### ✅ Escolaridades (Histórico Acadêmico)
- Timeline vertical
- Ordenação por data de conclusão
- Lightbox para certificados
- Informações: escola, categoria, duração, período

### ✅ Certificações Profissionais
- Grid responsivo (2 colunas)
- Status de validade (válida/expirada/sem expiração)
- Data de emissão e expiração
- Categoria da certificação
- Lightbox para visualizar certificados

### ✅ Lightbox de Certificados
- Modal full-screen
- Clique fora para fechar
- Botão de fechar
- Tecla ESC para fechar
- Prevenção de scroll do body
- Funciona em cursos, escolaridades e certificações

## Estrutura de Dados

### Payload de Cursos
```json
{
  "id": 302,
  "uuid": "f9ed2d1c-a751-4e57-ae19-590841cff49d",
  "nome": ".Net boas vindas",
  "descricao": "Introdução ao .net",
  "escola": "Alura",
  "categoria": {
    "id": 9,
    "nome": "Backend - .NET"
  },
  "duracaoHoras": 2,
  "dataInicio": "2025-11-03",
  "dataConclusao": "2025-11-03",
  "certificadoUrl": "files/cursos/xxx.png",
  "miniaturaCertificadoUrl": "files/cursos/xxx_thumb.png",
  "timestamp": "2025-12-24T10:15:32.998861"
}
```

### Payload de Escolaridades
```json
{
  "id": 1,
  "nome": "Graduação em Ciência da Computação",
  "descricao": "Bacharelado em Ciência da Computação",
  "escola": "Universidade XYZ",
  "categoria": {
    "id": 1,
    "nome": "Graduação"
  },
  "duracaoHoras": 3600,
  "dataInicio": "2015-01-01",
  "dataConclusao": "2018-12-01",
  "certificadoUrl": "files/escolaridade/diploma.png"
}
```

### Payload de Certificações
```json
{
  "id": 1,
  "nome": "AWS Solutions Architect",
  "categoria": {
    "id": 5,
    "nome": "Cloud"
  },
  "dataEmissao": "2023-06-15",
  "dataExpiracao": "2026-06-15",
  "pathCertificado": "files/certificacoes/aws.png"
}
```

## Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript reativo
- **Axios** - Cliente HTTP
- **Bulma CSS** - Framework CSS
- **Font Awesome** - Ícones
- **Vercel** - Hospedagem do proxy serverless
- **GitHub Pages** - Hospedagem do portfólio

## Desenvolvimento Local

### Testar o Proxy Localmente

```bash
cd proxy-vercel
npm install
vercel dev
```

Acesse: `http://localhost:3000/api?endpoint=cursos`

### Testar o Portfólio Localmente

Abra o arquivo `index.html` em um navegador ou use um servidor local:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx http-server -p 8080
```

## Informações Profissionais

### Emprego Atual
- **Empresa**: Itaú Unibanco
- **Cargo**: Especialista de Sistema (Staff Engineer)
- **Foco**: Criação de sistemas resilientes e escaláveis, resolução de problemas
- **Entrada**: Setembro 2021 como Team Member
- **Promoções**: 
  - Tech Lead
  - Especialista (Novembro 2025)

### APIs
- **Histórico Acadêmico**: http://144.91.72.60:7000/escolaridades
- **Certificações**: http://144.91.72.60:7000/certificacoes
- **Cursos**: http://144.91.72.60:7000/cursos

## Suporte

Se tiver problemas:

1. **CORS**: Verifique se o proxy está deployado corretamente
2. **SSL**: Use o proxy Vercel, não acesse a API diretamente
3. **Dados não carregam**: Verifique o console do navegador (F12)
4. **Lightbox não abre**: Verifique se o certificadoUrl está presente

## Performance

- Vue.js carregado via CDN (cache do navegador)
- Lazy loading de imagens no lightbox
- Paginação de cursos (3 por página)
- Requisições assíncronas paralelas
- Transições suaves CSS

## Próximos Passos

- [ ] Deploy do proxy no Vercel
- [ ] Atualizar API_PROXY no index.html
- [ ] Commit e push para GitHub
- [ ] Verificar funcionamento no GitHub Pages
- [ ] Adicionar mais informações profissionais
- [ ] Implementar busca/filtro avançado

