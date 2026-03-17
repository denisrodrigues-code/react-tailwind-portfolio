# Portfólio Denis Rodrigues

Portfólio profissional desenvolvido com foco em engenharia front-end moderna: arquitetura modular, UX responsiva, animações orientadas a contexto e padrão de qualidade consistente.

## Contexto do Projeto 🚀

Este projeto funciona como vitrine técnica e de produto para:

- apresentar posicionamento profissional (Hero + About)
- evidenciar stack e capacidade de entrega (Skills + Projects)
- facilitar conversão de contato (Contact + Footer)

Não é apenas uma landing page estética. A estrutura foi pensada para evolução contínua de conteúdo e funcionalidades sem degradar manutenção.

## Pilha Tecnológica 🧰

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React + React Icons
- Biome (lint + formatação)

## Princípios de Engenharia 🧠

- **Fonte única da verdade para conteúdo**: textos estratégicos centralizados em `src/content/portfolio.js`.
- **Dados de domínio separados da UI**: `src/data/*` concentra coleções reutilizáveis (projetos, navegação, contatos etc.).
- **Navegação orientada a contrato**: IDs canônicos de seção (`home`, `skills`, `projects`, `about`, `contact`) governam navbar e scroll.
- **Fronteiras de componentes claras**: seções atuam como containers; subcomponentes focam em renderização.
- **Imports por alias**: `@/` como padrão para reduzir acoplamento por caminho relativo.

## Funcionalidades Atuais ✨

- Navegação com scroll suave entre seções
- Tema claro/escuro com consistência visual
- Hero com animações e cursor customizado
- Skills com cards, tecnologias e métricas
- Projects com cards interativos e links de entrega
- About com narrativa profissional e timeline
- Contact com formulário e atalhos sociais
- Footer com bloco de expertise e CTA de retorno ao topo
- Responsividade completa (mobile-first)

## Estrutura do Projeto 🗂️

```text
src/
  components/
    layout/
    ui/
  content/
    portfolio.js
  constants/
  context/
  data/
  hooks/
  lib/
  providers/
  sections/
    Hero/
    Skills/
    Projects/
    About/
    Contact/
    Footer/
  styles/
```

## Decisões Arquiteturais-Chave 🏗️

1. **Conteúdo desacoplado de componentes**
   - Benefício: mudanças de copy sem tocar em lógica/estilo.
   - Trade-off: exige disciplina para não reintroduzir texto hardcoded nas seções.

2. **Dados compartilhados em `src/data`**
   - Benefício: evita duplicação de social links, navegação e entidades visuais.
   - Trade-off: quando crescer, vale migrar para camada `entities/` com schemas.

3. **Biome como padrão único de qualidade**
   - Benefício: padronização objetiva de estilo e lint.
   - Trade-off: regras devem ser revisadas periodicamente para evitar ruído.

## Configuração Local ⚙️

### Pré-requisitos 📋

- Node.js 18+
- npm 9+

### Instalação 📦

```bash
npm install
```

### Desenvolvimento 💻

```bash
npm run dev
```

Aplicação local: `http://localhost:5173`

## Execução com Docker 🐳

### Build + Run com Docker

```bash
docker build -t react-tailwind-portfolio .
docker run --rm -p 8080:80 react-tailwind-portfolio
```

Aplicação no container: `http://localhost:8080`

### Usando Docker Compose

```bash
docker compose up --build -d
```

Parar:

```bash
docker compose down
```

## Portas de Qualidade ✅

Antes de qualquer entrega, execute:

```bash
npm run check
npm run build
```

## Scripts Disponíveis 🛠️

- `npm run dev` - inicia ambiente local
- `npm run build` - gera build de produção
- `npm run preview` - sobe build localmente
- `npm run lint` - lint com Biome
- `npm run format` - formatação automática
- `npm run check` - lint + format check
- `npm run check:fix` - correção automática de problemas suportados

## Guia de Gestão de Conteúdo 🧩

### Texto das Seções ✍️

- `src/content/portfolio.js`

### Navegação 🧭

- `src/data/navigation.js`

### Projetos 📁

- `src/data/projects.js`

### Contato e Links Sociais 🔗

- `src/data/contactInfo.js`
- `src/data/socialLinks.js`

### Imagens 🖼️

- Imagem de perfil do Hero: `src/assets/images/profile-img.png`
- Imagem da seção About: `src/assets/images/about-image.jpg`

## Deploy 🌐

Saída de build: `dist/`

Deploy compatível com qualquer host estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Próximas Iterações Sugeridas 📈

- i18n (pt-BR/en) com namespaces por seção
- serviço real para formulário (API/provedor de e-mail)
- testes de regressão visual e smoke de navegação
- budget de performance e monitoramento de Web Vitals

## Licença 📄

Definir conforme estratégia do projeto (MIT, proprietária etc.).
