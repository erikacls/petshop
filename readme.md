# 🐾 Pet Shop PataFeliz — Landing Page

## Identificação do Projeto

- **Nome do projeto:** Pet Shop PataFeliz - Landing Page  
- **Autora:** Erika Lopes
- **Curso:** Introdução à Programação Front-End e Back-End (20h)  
- **Programa:** SCTEC - Carreira Tech, Ciclo 2  
- **Data de entrega:** 07 de maio de 2026

---

## Descrição do Projeto

Este projeto consiste em uma **landing page responsiva e funcional** desenvolvida para o pet shop fictício **PataFeliz**, com sede em Florianópolis/SC. A página tem como objetivo funcionar como um cartão de visitas digital da marca, apresentando serviços, diferenciais e facilitando a conversão de novos clientes por meio de pontos de contato estratégicos.

O projeto foi desenvolvido utilizando exclusivamente **HTML5**, **CSS3** e **JavaScript Vanilla** (sem frameworks ou bibliotecas externas), atendendo integralmente aos requisitos técnicos e estruturais estabelecidos no descritivo da atividade.

---

## Repositório

Este projeto está versionado no GitHub para fins de organização, histórico de desenvolvimento e consulta pública do código-fonte.

- **Link do repositório:** https://github.com/erikacls/petshop

> Observação: a entrega oficial do desafio foi realizada por meio do arquivo compactado contendo todos os arquivos necessários para execução local do projeto.

---

## Etapas de Desenvolvimento

### 1. Planejamento e Identidade Visual

A primeira etapa consistiu na definição da identidade visual da marca. Foram escolhidas cores que transmitissem acolhimento e confiança — verde como cor principal (`#2d7a4f`), laranja como cor de destaque (`#e8834a`) e tons creme para o fundo.

A tipografia foi definida a partir da combinação das fontes **Nunito** e **Playfair Display**, importadas do Google Fonts. A **Nunito** foi utilizada na logo, navegação, botões, formulários e textos corridos por ter uma aparência arredondada, moderna e amigável, adequada ao segmento pet. Já a **Playfair Display** foi aplicada nos títulos principais para criar contraste visual, elegância e personalidade na composição da landing page.

### 2. Estruturação em HTML5 Semântico

O arquivo `index.html` foi organizado com tags semânticas: `<nav>`, `<section>`, `<article>` e `<footer>`, garantindo acessibilidade e boa prática de marcação. Cada seção recebeu um `id` para facilitar a navegação por âncoras e os links do menu de navegação fixo.

### 3. Estilização e Layout em CSS3

O arquivo `style.css` foi estruturado em blocos comentados, cobrindo:

- **Variáveis CSS** (`:root`) para padronizar a paleta de cores em todo o projeto;
- **Navegação fixa** com `backdrop-filter` e `position: fixed`;
- **Seção Hero:** uso de `position: relative` no container e `position: absolute` nos elementos sobrepostos (círculo decorativo, emoji do pet e balões de destaque), criando profundidade visual;
- **Seção Sobre:** layout em `CSS Grid` com duas colunas e indicadores numéricos construídos com **Flexbox**;
- **Seção Serviços:** `CSS Grid` responsivo com `auto-fit` e `minmax`, e aplicação de `aspect-ratio: 4/3` nas áreas de ícone dos cards para manter proporção consistente;
- **Seção Contato:** grid de duas colunas com informações de contato e formulário;
- **Responsividade** via `@media queries` para telas abaixo de 900px e 680px, incluindo menu hamburguer mobile.

### 4. Interatividade com JavaScript

O arquivo `script.js` implementa duas funcionalidades principais:

- **Menu hamburguer:** alterna a classe `.open` nos links de navegação em telas pequenas, permitindo que o menu seja exibido ou ocultado. Inclui suporte à tecla `Enter` para acessibilidade;
- **Validação do formulário:** ao clicar em "Enviar", o script verifica se os campos obrigatórios (nome, e-mail e mensagem) estão preenchidos. O campo de e-mail é validado por uma expressão regular (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). Erros são exibidos inline, em tempo real, e uma mensagem de sucesso é mostrada após o envio bem-sucedido.

---

### 5. Organização de Arquivos

O projeto foi organizado na seguinte estrutura de arquivos para facilitar a manutenção e a compreensão da entrega:

```text
petshop/
├── index.html
├── style.css
├── script.js
├── readme.md
├── apresentacao_tecnica.md
└── LICENSE
```

O arquivo `apresentacao_tecnica.md` é um material complementar com uma explicação mais detalhada sobre as decisões técnicas do projeto.

---

## Como Executar o Projeto Localmente

Siga os passos abaixo para visualizar o projeto no seu navegador:

**Pré-requisito:** não é necessário instalar nenhuma dependência. O projeto roda diretamente no navegador.

### Opção 1 — Abertura direta

1. Faça o download ou descompacte o arquivo `.zip` em uma pasta de sua preferência;
2. Navegue até a pasta do projeto;
3. Dê um duplo clique no arquivo `index.html`;
4. O projeto abrirá automaticamente no seu navegador padrão.

### Opção 2 — Live Server (recomendado)

Para evitar possíveis restrições de CORS ao carregar recursos locais:

1. Instale o editor **Visual Studio Code** em [code.visualstudio.com](https://code.visualstudio.com);
2. Abra a pasta do projeto no VS Code (`Arquivo > Abrir Pasta`);
3. Instale a extensão **Live Server** (por Ritwick Dey) na aba de extensões;
4. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**;
5. O projeto será aberto em `http://127.0.0.1:5500` com atualização automática ao salvar.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| HTML5 | - | Estruturação semântica do conteúdo |
| CSS3 | - | Estilização, layout e responsividade |
| JavaScript | ES6+ | Interatividade e validação de formulário |
| Google Fonts | - | Tipografia (Playfair Display + Nunito) |

---

## Requisitos Técnicos Atendidos

- [x] Identidade visual coerente com paleta de cores e tipografia definidas  
- [x] Seção Hero com `position: relative/absolute` e CTAs  
- [x] Seção Sobre com CSS Grid/Flexbox e indicadores numéricos  
- [x] Seção de Serviços com cards, `aspect-ratio` e ícones visuais  
- [x] Seção de Contato com formulário e validação JavaScript  
- [x] HTML semântico e responsividade via media queries  
- [x] Código organizado, comentado e sem erros de execução  
