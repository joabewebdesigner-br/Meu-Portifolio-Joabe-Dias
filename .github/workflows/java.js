
const formulario = document.getElementById("form-contato");

const mensagem = document.getElementById("mensagem-status");

formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Verifica se os campos estão preenchidos corretamente
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    // Mostra uma mensagem na tela
    mensagem.textContent = "Formulário preenchido com sucesso!";

    // Limpa os campos do formulário
    formulario.reset();

});
