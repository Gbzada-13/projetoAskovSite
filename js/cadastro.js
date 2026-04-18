function fazerCadastro() {
    // Captura os elementos dos inputs
    const nome = document.getElementById('nome').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.querySelector('.campoSenha').value;
    const confirmeSenha = document.querySelector('.campoConfirmeSenha').value;

    // Verificação: Campos vazios
    if (!nome || !dataNasc || !cpf || !senha || !confirmeSenha) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Verificação: CPF
    // podemos depois colocar uma validação e ver se o cpf é valido mesmo, vou deixar para você hahahaha
    if (cpf.length < 11) {
        alert("Por favor, digite um CPF válido.");
        return;
    }

    // Verificação: Senhas iguais
    if (senha !== confirmeSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Cria o objeto do usuário
    const usuario = {
        nome: nome,
        dataNascimento: dataNasc,
        cpf: cpf,
        senha: senha
    };

    // Salvar no LocalStorage - Depois quero fazer junto contigo para salvarmos no banco do google o firebase
    // te ensino a olhar isso depois
    // Usamos o CPF como "chave" única para cada usuário
    localStorage.setItem(cpf, JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    // Redirecionar para a tela de login
    window.location.href = "login.html";
}

// Máscara de CPF automática (ajuda o usuário a digitar certo)
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});