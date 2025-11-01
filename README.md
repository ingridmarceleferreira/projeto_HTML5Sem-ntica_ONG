# 🚀 Projeto Plataforma de ONG (Prato Cheio, Futuro Certo)

Este projeto é a entrega final da disciplina de Desenvolvimento Web Front-End, simulando a criação de uma plataforma web completa, profissional e responsiva para uma ONG fictícia.

O sistema foi construído de forma incremental, aplicando conceitos de HTML5 Semântico (Entrega I), CSS3 Avançado e Responsividade (Entrega II), JavaScript Interativo (Entrega III) e Práticas Profissionais de Acessibilidade e Versionamento (Entrega IV).

---

## ✨ Funcionalidades Principais (Features)

A plataforma implementa um conjunto robusto de funcionalidades focadas no engajamento do usuário e na gestão da ONG:

* **Layout Responsivo (Mobile-First):** Construído com um sistema de Grid de 12 colunas customizado e Flexbox.
* **Navegação Sofisticada:** Inclui um menu principal com dropdown e um menu hambúrguer totalmente funcional para dispositivos móveis.
* **SPA (Single Page Application):** O site usa `fetch` e `DOMParser` para carregar conteúdo (como as páginas de Projetos e Cadastro) dinamicamente, sem recarregar a página.
* **Formulários Avançados:** Formulário de cadastro com validação visual (CSS `:invalid`) e funcional (JavaScript).
* **Máscaras de Input:** Verificação de consistência de dados com máscaras automáticas para CPF, Telefone e CEP.
* **Feedback Dinâmico:** Componentes de Alerta (Sucesso/Erro) que aparecem dinamicamente no envio de formulários.
* **Sistema de Componentes CSS:** Inclui Cards, Botões com estados (`:hover`, `:focus`) e Badges/Tags.

### ♿ Acessibilidade (WCAG 2.1 Nível AA)
O projeto foi desenvolvido com foco em acessibilidade:

* **Modo Escuro (Dark Mode):** Detecta a preferência do sistema (`prefers-color-scheme`) e aplica um tema escuro de alto contraste.
* **Navegação por Teclado:** Suporte completo para navegação via tecla `Tab`, utilizando `:focus-visible` para anéis de foco claros.
* **Suporte a Leitores de Tela:** Uso de HTML Semântico (`<main>`, `<nav>`), hierarquia de títulos correta e atributos ARIA (`aria-label`, `aria-expanded`).
* **Contraste de Cores:** A paleta de cores foi validada para garantir um contraste mínimo de 4.5:1.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica, formulários avançados.
* **CSS3:** Variáveis CSS (Sistema de Design), Flexbox, CSS Grid, Media Queries (Mobile-First), Animações (`:hover`, `transition`).
* **JavaScript (ES6+):** Manipulação do DOM, Event Listeners, `fetch` (Async/Await), `DOMParser` e roteamento SPA básico.
* **Git & GitHub:** Fluxo de trabalho GitFlow (branches `develop` e `feature`), Pull Requests documentados e Commits Semânticos.

---

## 🚀 Como Visualizar o Projeto

1.  Clone este repositório: `git clone https://github.com/ingridmarceleferreira/projeto_HTML5Semantica_ONG
2.  Abra o arquivo `index.html` no seu navegador de preferência.
3.  (Recomendado) Use a extensão "Live Server" no VS Code para habilitar o roteamento SPA.

---

## 👩‍💻 Autora

* **[Ingrid Marcele Ferreira de Assis]** - [https://www.linkedin.com/in/ingrid-marcele-ferreira]