# Portfólio Profissional

Landing page pessoal desenvolvida com o framework CSS Bulma para GitHub Pages.

## 🚀 Funcionalidades

- **Design Responsivo**: Totalmente adaptável para dispositivos móveis, tablets e desktops
- **Framework Bulma**: Utiliza o Bulma CSS via CDN para um design moderno e elegante
- **Seções Completas**:
  - 👋 Hero com apresentação e links sociais
  - 🛣️ Minha Jornada profissional
  - 💼 Posição profissional atual
  - 🏆 Certificações conquistadas
  - 🎓 Histórico acadêmico com timeline
  - 📚 Cursos realizados (integrado com API)

## 📊 Integração com API de Cursos

A página carrega automaticamente os cursos do endpoint:
```
http://kamehouse.com.br:7000/cursos
```

Os cursos são:
- Agrupados por categoria
- Contabilizados em estatísticas
- Exibidos de forma organizada e visual

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Bulma CSS](https://bulma.io/) v0.9.4
- [Font Awesome](https://fontawesome.com/) v6.4.0

## 📝 Personalização

Para personalizar a página, edite o arquivo `index.html`:

1. **Informações Pessoais**: Altere nome, foto e links sociais na seção Hero
2. **Jornada**: Edite o texto na seção "Minha Jornada"
3. **Posição Atual**: Atualize cargo, empresa e responsabilidades
4. **Certificações**: Adicione ou remova certificações
5. **Histórico Acadêmico**: Modifique os itens da timeline educacional
6. **Cores**: Ajuste as variáveis CSS no `<style>` para mudar o tema

## 🌐 Deploy no GitHub Pages

1. Commit e push dos arquivos para o repositório
2. Acesse Settings > Pages no seu repositório
3. Configure a branch principal como fonte
4. Aguarde alguns minutos e acesse `https://seuusuario.github.io`

## 📱 Recursos

- Navegação suave entre seções
- Menu responsivo (hamburger menu no mobile)
- Cards com efeito hover
- Timeline visual para histórico acadêmico
- Badges para certificações
- Loading state durante carregamento dos cursos
- Tratamento de erros da API

## 🔧 Estrutura da API Esperada

A API deve retornar um array JSON com cursos no seguinte formato:

```json
[
  {
    "nome": "Nome do Curso",
    "categoria": "Categoria",
    "instituicao": "Instituição",
    "duracao": 40,
    "ano": 2023
  }
]
```

Campos opcionais: `titulo`, `plataforma`, `data`

## 📄 Licença

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ usando Bulma CSS

