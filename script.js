/* =============================================
   PET SHOP PATAFELIZ — script.js
   ============================================= */

/* ---------- MENU HAMBURGUER (mobile) ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Acessibilidade: abre/fecha com Enter
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- VALIDAÇÃO DO FORMULÁRIO ---------- */
const form = document.getElementById('contactForm');

/**
 * Exibe ou oculta a mensagem de erro de um campo.
 * @param {string} inputId - ID do campo input
 * @param {string} msgId   - ID do span de erro
 * @param {boolean} show   - true para mostrar, false para ocultar
 */
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

/**
 * Valida o formato de um endereço de e-mail via RegEx.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

// Envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recarregamento da página

  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  let isValid    = true;

  // Validação: nome obrigatório
  if (!nome) {
    toggleError('nome', 'nomeError', true);
    isValid = false;
  } else {
    toggleError('nome', 'nomeError', false);
  }

  // Validação: e-mail obrigatório + formato
  if (!email || !isValidEmail(email)) {
    toggleError('email', 'emailError', true);
    isValid = false;
  } else {
    toggleError('email', 'emailError', false);
  }

  // Validação: mensagem obrigatória
  if (!mensagem) {
    toggleError('mensagem', 'mensagemError', true);
    isValid = false;
  } else {
    toggleError('mensagem', 'mensagemError', false);
  }

  // Se todos os campos são válidos: simula envio
  if (isValid) {
    form.reset();
    const successEl = document.getElementById('formSuccess');
    successEl.classList.add('show');

    // Oculta a mensagem de sucesso após 5 segundos
    setTimeout(() => successEl.classList.remove('show'), 5000);
  }
});

// Remove erros em tempo real ao digitar
['nome', 'email', 'mensagem'].forEach((id) => {
  document.getElementById(id).addEventListener('input', function () {
    this.classList.remove('input-error');
    document.getElementById(id + 'Error').classList.remove('show');
  });
});
