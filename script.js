async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    var requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    var requisicaoCEP = await requisicao.json();
    if (requisicaoCEP.err) {
        throw Error('CEP não existente');
    } 
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value= requisicaoCEP.localidade;
    logradouro.value = requisicaoCEP.logradouro;
    estado.value = requisicaoCEP.uf;
    console.log(requisicaoCEP);
    return requisicaoCEP; 
} catch (err) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente`
    console.log(err)
}
}
var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

