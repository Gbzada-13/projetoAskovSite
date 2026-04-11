function fazerCadastro() {
    let input1_cadastro = document.getElementById("nome").value;
    let input2_cadastro = document.getElementById("senha").value;


   // var nome_cadastro = String(input1_cadastro);
   // var senha_cadastro = String(input2_cadastro.value);

    return input1_cadastro

}


function fazerLogin(dadosCadastro) {

    let input_1_login = document.getElementById("campo-nome");
    let input_2_login = document.getElementById("campo-senha");

    var nome_login = String(input_1_login.value);
    var senha_login = String(input_2_login.value);
    
    return dadosCadastro

}

function iniciarFluxo() {
    var fazerCadastro = fazerCadastro();
    var msgFinal = fazerLogin(dadosCadastro);

    alert(msgFinal);
}