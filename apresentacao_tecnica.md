# Apresentação Técnica — PataFeliz Landing Page

---

## 1. Visão Geral do Projeto

O projeto é uma **landing page responsiva para o pet shop fictício PataFeliz**, desenvolvida como desafio prático de front-end. O objetivo principal é funcionar como um **cartão de visitas digital da marca**: apresentar os serviços, transmitir credibilidade e converter visitantes em clientes por meio de pontos de contato estratégicos.

### Qual problema ela resolve?

Muitos pequenos negócios não têm presença digital organizada. A página resolve isso ao reunir em um único lugar: identidade visual da marca, descrição dos serviços, indicadores de autoridade, informações de contato e um formulário funcional — tudo com navegação fluida e carregamento instantâneo, sem dependência de frameworks, bibliotecas JavaScript ou servidores.

### Proposta visual e comercial

A proposta visual é **moderna, acolhedora e orientada à conversão**. As escolhas das cores verde como cor principal e laranja como cor de ação não são aleatórias: verde remete à natureza, cuidado e confiança, enquanto o laranja cria destaque visual e chama atenção para os CTAs.

A tipografia combina **Nunito** na logo, navegação, botões e textos corridos, transmitindo leveza, legibilidade e uma sensação mais amigável, com **Playfair Display** nos títulos principais, trazendo personalidade, elegância e contraste visual.

### Como a página converte clientes?

A conversão foi pensada em camadas:
- A seção Hero captura a atenção com impacto visual e dois CTAs claros: **"Agendar serviço"** (conversão direta) e **"Ver serviços"** (engajamento progressivo);
- Os indicadores numéricos na seção Sobre (`500+ pets atendidos`, `6 anos de experiência`, `5★`) constroem **prova social e confiança**;
- Os cards de serviço com preços visíveis reduzem a fricção de decisão;
- O formulário de contato com validação imediata melhora a taxa de envio ao corrigir erros antes de frustrar o usuário.

---

## 2. Estrutura do HTML

### Organização do documento

O `index.html` foi estruturado em camadas bem definidas: navegação fixa, seção hero, seção sobre, seção de serviços, seção de contato e footer. Cada bloco corresponde a uma etapa da jornada do usuário na página.

### Tags semânticas utilizadas

Priorizei HTML5 semântico em vez de `<div>` genéricas onde a semântica agrega valor:

```html
<nav>        <!-- navegação principal -->
<section>    <!-- cada seção temática da página -->
<article>    <!-- cada card de serviço, conteúdo autônomo -->
<footer>     <!-- rodapé com informações institucionais -->
```

Por exemplo, cada card de serviço usa `<article>` porque representa um conteúdo independente e completo, é semanticamente correto e beneficia leitores de tela.

### Divisão das seções

```
#hero      → Impacto inicial + CTAs
#sobre     → Storytelling da marca + indicadores
#servicos  → Cards dos serviços oferecidos
#contato   → Informações + formulário de contato
footer     → Rodapé institucional
```

Os `id`s das seções servem como âncoras para os links do menu de navegação, permitindo scroll suave com `scroll-behavior: smooth` no CSS e sem uma linha sequer de JavaScript para isso.

### Por que essa estrutura facilita manutenção?

Porque cada seção é **autocontida**: posso alterar ou remover um bloco sem afetar os demais. O menu usa `href="#servicos"`, então se eu renomear a seção, basta atualizar o `id` em um único lugar. A separação em arquivos externos (`style.css` e `script.js`) reforça esse princípio.

---

## 3. Organização do CSS

### Estrutura do arquivo

O `style.css` foi organizado em blocos comentados em ordem lógica:

```
Variáveis → Reset → Nav → Hero → Sobre → Serviços → Contato → Footer → Responsivo
```

Isso facilita navegação no arquivo: qualquer desenvolvedor que abrir o código sabe exatamente onde encontrar o estilo de cada seção.

### Variáveis CSS (custom properties)

Toda a identidade visual está centralizada em variáveis no `:root`:

```css
:root {
  --verde:        #2d7a4f;
  --verde-claro: #4aab75;
  --creme:        #fdf6ec;
  --laranja:      #e8834a;
  --marrom:       #5c3d2e;
  --cinza-bg:     #f4f4f4;
  --texto:        #2c2c2c;
  --branco:       #ffffff;
}
```

Isso significa que, para mudar a cor principal do site inteiro, altero **uma única linha**. É o princípio de fonte única de verdade aplicado ao CSS.

### Flexbox e Grid

Usei as duas ferramentas com propósitos distintos e intencionais:

**CSS Grid** foi usado para layouts bidimensionais, como a seção Sobre, a seção de Serviços e a seção de Contato:

```css
/* Seção Sobre: duas colunas de largura definida */
.sobre-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Cards de serviço: colunas dinâmicas e responsivas */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.6rem;
}

/* Seção Contato: informações e formulário lado a lado no desktop */
.contato-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
  max-width: 1120px;
  margin: 0 auto;
}
```

Na seção de Contato, o Grid foi usado para manter as informações de contato e o formulário lado a lado no desktop. O `max-width: 1120px` limita a largura máxima do conteúdo em monitores grandes, enquanto `margin: 0 auto` centraliza o bloco na tela.

**Flexbox** foi usado para alinhamento unidimensional:
```css
/* Indicadores da seção Sobre */
.stats-grid {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

/* Itens de contato com ícone + texto */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
}
```

Nos itens de contato, o Flexbox foi usado para alinhar ícones e textos, mantendo boa leitura tanto no desktop quanto no mobile.

### position: relative e absolute no Hero

Um requisito técnico explícito do projeto era o uso de posicionamento. Implementei isso na seção Hero utilizando `position: relative` no container principal e `position: absolute` nos elementos visuais sobrepostos.

```css
/* Seção principal define o contexto geral */
#hero {
  position: relative;
  overflow: hidden;
}

/* Container visual posicionado dentro do Hero */
.hero-img-wrap {
  position: absolute;
  right: 4%;
  bottom: 0;
}

/* Elementos sobrepostos */
.hero-circle { position: absolute; bottom: 0; right: 0; }
.hero-pet    { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }
.hero-bubble { position: absolute; }
.bubble-1    { top: 18%; right: 2%; }
.bubble-2    { top: 42%; left: 2%; }
```

O resultado são camadas sobrepostas — círculo verde de fundo, o pet por cima, e os balões flutuando acima de tudo e criando profundidade visual sem JavaScript.

### aspect-ratio nos cards

```css
.card-icon-wrap {
  aspect-ratio: 4 / 3;
}
```

Isso garante que a área de imagem/ícone de cada card mantenha sempre a mesma proporção, independentemente da largura da tela ou do tamanho do container. É uma técnica moderna que substitui o antigo "hack do padding-top" usado antes do suporte nativo ao `aspect-ratio`.

### Responsividade com media queries

```css
@media (max-width: 900px) {
  #hero {
    min-height: auto;
    padding: 160px 6% 80px;
  }

  .sobre-grid,
  .contato-wrap {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-bubble {
    display: none;
  }
}

@media (max-width: 680px) {
  .nav-links,
  .nav-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
```

Nas telas menores, as seções Sobre e Contato passam de duas colunas para uma coluna. O Hero também recebe ajustes de altura, espaçamento e opacidade do elemento visual, garantindo que o texto e os CTAs continuem sendo o foco principal no mobile.

Também foram aplicadas regras como `overflow-x: hidden`, `min-width: 0` e `overflow-wrap` para evitar estouros horizontais em telas menores, especialmente em grids, cards, formulários e textos longos.

A abordagem foi **desktop-first**: o layout padrão é para telas maiores e as media queries fazem os ajustes para mobile. Para um projeto futuro, eu consideraria migrar para **mobile-first**, que é considerada melhor prática atualmente.

### clamp() para tipografia fluida

```css
font-size: clamp(2.2rem, 5vw, 3.4rem);
```

O `clamp()` define um tamanho mínimo, um valor fluido relativo à viewport e um máximo. Isso elimina a necessidade de reescrever regras de `font-size` dentro de cada media query, o título do hero se redimensiona automaticamente conforme a tela.

---

## 4. JavaScript

### Funcionalidade 1 — Menu hamburguer

```javascript
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
```

A lógica é simples e eficiente: um único `toggle` adiciona ou remove a classe `.open` da lista de links. O CSS cuida de toda a exibição e o JS só gerencia o estado. Isso é a separação de responsabilidades funcionando na prática.

Também adicionei suporte à tecla `Enter` para acessibilidade:

```javascript
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') navLinks.classList.toggle('open');
});
```

E fecho o menu automaticamente ao clicar em qualquer link, evitando que ele fique aberto após a navegação:

```javascript
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
```

### Funcionalidade 2 — Validação do formulário

O formulário usa `novalidate` no HTML para **desativar a validação nativa do navegador** e assumir o controle completo via JavaScript, isso me dá liberdade para personalizar mensagens e estilos de erro.

```javascript
form.addEventListener('submit', (e) => {
  e.preventDefault(); // impede recarregamento da página
  // ...lógica de validação
});
```

A validação cobre três regras:

**1. Campos obrigatórios** — verificação de string vazia após `.trim()`:
```javascript
if (!nome) { toggleError('nome', 'nomeError', true); isValid = false; }
```

**2. Formato de e-mail via RegEx:**
```javascript
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}
```
A expressão regular verifica: caracteres antes do `@`, o próprio `@`, domínio e extensão. Não é uma validação RFC completa, mas cobre os casos de uso comuns para front-end.

**3. Feedback em tempo real** — os erros somem enquanto o usuário digita:
```javascript
document.getElementById(id).addEventListener('input', function () {
  this.classList.remove('input-error');
  document.getElementById(id + 'Error').classList.remove('show');
});
```

Isso melhora muito a experiência: o usuário vê o erro, começa a corrigir e o aviso desaparece imediatamente, sem precisar submeter o formulário de novo.

### Função auxiliar toggleError

```javascript
function toggleError(inputId, msgId, show) {
  const input = document.getElementById(inputId);
  const msg   = document.getElementById(msgId);
  if (show) {
    input.classList.add('input-error');
    msg.classList.add('show');
  } else {
    input.classList.remove('input-error');
    msg.classList.remove('show');
  }
}
```

Ao invés de repetir a mesma lógica três vezes (uma para cada campo), encapsulei em uma função reutilizável. Isso segue o princípio **DRY** — *Don't Repeat Yourself*.

---

## 5. Boas Práticas Aplicadas

### Separação de responsabilidades

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura e conteúdo |
| `style.css` | Apresentação visual |
| `script.js` | Comportamento e interatividade |

Nenhum estilo `inline` e nenhum `onclick` no HTML, toda a lógica está nos arquivos corretos.

### Nomenclatura de classes

As classes seguem o padrão **BEM-like** simplificado: bloco (`card`), elemento (`card-body`, `card-badge`) e modificador (`input-error`, `form-success`). Isso torna o CSS legível e previsível.

### Código limpo e comentado

Cada bloco do CSS tem um comentário de seção. O JavaScript tem JSDoc nas funções e comentários explicativos nas lógicas menos óbvias. Isso é importante para manutenção, tanto para outros desenvolvedores quanto para eu mesmo semanas depois.

### CTAs e acessibilidade

- O menu hamburguer possui `aria-label`, `role="button"` e `tabindex="0"` para melhorar a navegação por teclado;
- O emoji principal do Hero usa `role="img"` e `aria-label`, tornando seu significado mais claro para tecnologias assistivas;
- Elementos decorativos utilizam `aria-hidden="true"` quando não acrescentam informação essencial ao conteúdo.

---

## 6. Decisões Técnicas

### Por que sem frameworks?

O requisito do projeto era HTML, CSS e JavaScript puros. Mas além do requisito, essa escolha tem um benefício real: **zero dependências externas**. A página carrega de forma instantânea porque não há nenhum bundle de framework sendo baixado. Para uma landing page de conversão, velocidade de carregamento é diretamente relacionada à taxa de conversão.

### Por que desktop-first?

Por ser o primeiro projeto com esse nível de detalhamento visual, parti do layout mais complexo (desktop) para o mais simples (mobile). Em projetos futuros, a abordagem **mobile-first** seria mais indicada, pois a maioria dos acessos web hoje vem de dispositivos móveis, e construir de baixo para cima tende a gerar CSS mais enxuto.

### O que poderia melhorar em uma próxima versão?

1. **Mobile-first:** refatorar as media queries para partir do mobile;
2. **Acessibilidade aprimorada:** adicionar `aria-live` na mensagem de sucesso do formulário para leitores de tela anunciarem o feedback;
3. **CSS com BEM estrito:** adotar a convenção BEM completa para escalabilidade do CSS;
4. **Animações com IntersectionObserver:** fazer os cards e seções entrarem com animação ao scroll, melhorando o engajamento visual;
5. **Integração de back-end:** conectar o formulário a um serviço real de envio de e-mails, como EmailJS ou Formspree;
6. **Otimização de imagens:** ao adicionar imagens reais, usar o atributo `loading="lazy"` e formatos modernos como WebP.

---

## Apresentação curta

> O projeto que desenvolvi é uma landing page para um pet shop fictício chamado PataFeliz, criada como desafio prático de front-end utilizando HTML5, CSS3 e JavaScript Vanilla, sem nenhum framework externo.
>
> O objetivo da página é funcionar como um cartão de visitas digital da marca: apresentar os serviços, transmitir credibilidade e converter visitantes em clientes. Estruturei o documento com tags semânticas - `nav`, `section`, `article` e `footer` - para facilitar a leitura, manutenção e acessibilidade.
>
> No CSS, centralizei toda a identidade visual em variáveis no `:root`, o que me permite alterar a paleta inteira em um único lugar. Usei CSS Grid para layouts bidimensionais, como a seção Sobre, os cards de serviços e a área de Contato com informações e formulário lado a lado. Também usei Flexbox para alinhamentos lineares, como os indicadores da seção Sobre e os itens de contato com ícone e texto. A propriedade `aspect-ratio` garante proporção consistente nas imagens dos cards, e `clamp()` torna a tipografia fluida sem precisar de media queries adicionais.
>
> No JavaScript, implementei o menu hamburguer mobile com toggle de classe CSS e a validação do formulário de contato, que inclui verificação de campos obrigatórios e validação de e-mail por expressão regular. O feedback é dado em tempo real — o erro some enquanto o usuário digita — o que melhora significativamente a experiência.
>
> Um ponto que destaco é a separação clara de responsabilidades: HTML cuida da estrutura, CSS da apresentação e JavaScript do comportamento. Não há estilos inline nem eventos no HTML. O código foi organizado em blocos comentados para facilitar manutenção.
>
> Como próximos passos, eu migraria para uma abordagem mobile-first, adicionaria animações com IntersectionObserver e integraria o formulário a um serviço real de envio de e-mails.
