// Esta função roda assim que a página carrega
window.onload = function() {
    // Busca os dados que o login guardou na sessão
    const dados = sessionStorage.getItem("usuarioLogado");

    // Verifica se o usuário realmente passou pelo login
    if (!dados) {
        //Se não houver dados, ele nem vê a página e volta pro login
        alert("Acesso restrito! Por favor, faça login.");
        window.location.href = "login.html";
        return; 
    }

    // Converte os dados de texto para um objeto JS
    const usuario = JSON.parse(dados);

    // COLOCA O SEU NOME NO CABEÇALHO
    // Procura o elemento pelo ID que criamos no HTML
    const elementoNome = document.getElementById('nomeUsuario');
    if (elementoNome) {
        elementoNome.textContent = usuario.nome;
    }

    // PERSONALIZA A MENSAGEM DE BOAS-VINDAS NO MEIO DA TELA
    const msgBoasVindas = document.getElementById('bemVindoMensagem');
    if (msgBoasVindas) {
        msgBoasVindas.textContent = `Olá, ${usuario.nome}!`;
    }
}

// Função para o botão "Sair"
function deslogar() {
    sessionStorage.removeItem("usuarioLogado"); // Limpa a sessão
    window.location.href = "login.html"; // Volta para o login
}