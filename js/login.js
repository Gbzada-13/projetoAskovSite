function fazerLogin() {
    const cpfDigitado = document.getElementById('campo-cpf').value;
    const senhaDigitada = document.getElementById('campo-senha').value;
    const msgErro = document.getElementById('senha-incorreta');

    msgErro.textContent = ""; // Limpa erros antigos

    if (!cpfDigitado || !senhaDigitada) {
        msgErro.textContent = "Preencha todos os campos!";
        return;
    }

    // Busca os dados no LocalStorage usando o CPF como chave
    const dadosSalvos = localStorage.getItem(cpfDigitado);

    if (dadosSalvos) {
        // Converte o texto salvo de volta para um objeto JS
        const usuario = JSON.parse(dadosSalvos);

        // Verifica se a senha bate
        if (usuario.senha === senhaDigitada) {
            // Salva na sessão que o cara está logado
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
            
            alert("Bem-vindo de volta, " + usuario.nome + "!");
            window.location.href = "homeLogado.html"; 
        } else {
            msgErro.textContent = "Senha incorreta!";
        }
    } else {
        msgErro.textContent = "CPF não encontrado!";
    }
}

// Mesma máscara de CPF do cadastro para facilitar o login
document.getElementById('campo-cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});