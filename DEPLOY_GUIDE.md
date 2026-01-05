# 🚀 Guia Rápido de Deploy

## ✅ O que foi feito

1. ✅ Migrado código para **Vue.js 3** (via CDN)
2. ✅ Configurado **Axios** para requisições HTTP
3. ✅ Criado **Proxy Vercel** para ignorar SSL
4. ✅ Implementado **Lightbox** para certificados
5. ✅ Adicionado **Carrossel** de cursos com filtros
6. ✅ **Timeline** de escolaridades
7. ✅ **Grid** de certificações profissionais

## 📋 Passos para Usar

### 1️⃣ Deploy do Proxy (NECESSÁRIO)

```bash
# Instalar Vercel CLI (se não tiver)
npm install -g vercel

# Ir para a pasta do proxy
cd proxy-vercel

# Fazer deploy
vercel
```

Durante o deploy:
- Responda "Y" quando perguntar se é um novo projeto
- Escolha um nome para o projeto (ex: "portfolio-proxy")
- Use as configurações padrão

Você receberá uma URL como:
```
https://portfolio-proxy-xyz.vercel.app
```

### 2️⃣ Atualizar index.html

Abra o arquivo `index.html` e encontre a linha (~linha 963):

```javascript
const API_PROXY = ''; // Coloque aqui a URL do seu proxy Vercel quando deployar
```

Substitua por:

```javascript
const API_PROXY = 'https://portfolio-proxy-xyz.vercel.app/api';
```

(Use a URL que você recebeu do Vercel)

### 3️⃣ Commit e Push

```bash
# Voltar para a raiz do projeto
cd ..

# Add, commit e push
git add .
git commit -m "Adiciona Vue.js e proxy Vercel para resolver SSL"
git push origin main
```

### 4️⃣ Verificar

Aguarde alguns minutos e acesse:
```
https://tiagoiwamoto.github.io
```

## 🧪 Testar Localmente

### Testar o Proxy

```bash
cd proxy-vercel
npm install
vercel dev
```

Abra: `http://localhost:3000/api?endpoint=cursos`

### Testar o Portfólio

```bash
# Na raiz do projeto
python3 -m http.server 8080
```

Abra: `http://localhost:8080`

**IMPORTANTE**: Se testar localmente, use o proxy local também:
```javascript
const API_PROXY = 'http://localhost:3000/api';
```

## 🔍 Verificar se está funcionando

No navegador, abra o Console (F12) e você deve ver:
- ✅ Cursos carregados
- ✅ Escolaridades carregadas
- ✅ Certificações carregadas
- ❌ Sem erros de CORS
- ❌ Sem erros de SSL

## 🆘 Problemas Comuns

### Erro: CORS
**Causa**: Proxy não está configurado ou URL incorreta
**Solução**: Verifique se deployou o proxy e se a URL está correta

### Erro: Dados não carregam
**Causa**: API offline ou URL do proxy incorreta
**Solução**: Teste o proxy diretamente: `https://seu-proxy.vercel.app/api?endpoint=cursos`

### Lightbox não abre
**Causa**: certificadoUrl não está presente nos dados
**Solução**: Verifique se a API está retornando o campo certificadoUrl

## 📱 Funcionalidades

- ✅ **Responsive**: Funciona em mobile, tablet e desktop
- ✅ **Carrossel**: Navegue pelos cursos com setas ou swipe
- ✅ **Filtros**: Filtre cursos por categoria
- ✅ **Lightbox**: Clique nos certificados para visualizar
- ✅ **Timeline**: Histórico acadêmico cronológico
- ✅ **Status**: Certificações válidas/expiradas
- ✅ **Estatísticas**: Total de cursos, horas e categorias

## 📚 Documentação

- **Solução Completa**: Ver `SOLUCAO_VUE_PROXY.md`
- **Proxy Vercel**: Ver `proxy-vercel/README.md`

## 🎯 Resultado Final

Após o deploy, você terá:

1. Portfólio no GitHub Pages (HTTPS) ✅
2. Proxy no Vercel (HTTPS) ✅
3. API acessível sem erros de SSL ✅
4. Interface reativa com Vue.js ✅
5. Lightbox funcionando ✅
6. Dados ordenados por data ✅

---

**Qualquer dúvida, consulte os arquivos de documentação!** 🚀

