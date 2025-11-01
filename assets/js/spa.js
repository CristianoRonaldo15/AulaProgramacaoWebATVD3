// spa.js — Validação e interatividade da Entrega 3

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  if (!form) return; // Garante que só roda na página de cadastro

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    clearErrors(form);

    // Campos obrigatórios
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();

    // Validação do nome
    if (nome.length < 3) {
      showError(form.nome, "O nome deve ter pelo menos 3 caracteres.");
      valid = false;
    }

    // Validação do email (regex simples)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(form.email, "Informe um e-mail válido.");
      valid = false;
    }

    // Validação do CPF (formato 000.000.000-00)
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      showError(form.cpf, "Informe um CPF no formato 000.000.000-00.");
      valid = false;
    }

    if (valid) {
      alert("Formulário enviado com sucesso! 🎉");
      form.reset();
    }
  });

  // Função para exibir erro visual e mensagem
  function showError(input, message) {
    input.classList.add("error");

    let msg = document.createElement("small");
    msg.className = "error-message";
    msg.textContent = message;

    if (input.parentNode) {
      input.parentNode.insertBefore(msg, input.nextSibling);
    }
  }

  // Função para limpar mensagens de erro anteriores
  function clearErrors(form) {
    form.querySelectorAll(".error-message").forEach((el) => el.remove());
    form.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  }
});
