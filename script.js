// const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse cep não existe!')
//         } else
//         console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('processamento concluído!'));

// console.log(consultaCEP);

// ------------------------------------------------
// ASYNC AWAIT

// async function buscaEndereco() {
//     var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
//     var consultaCEPConvertida = await consultaCEP.json();
//     console.log(consultaCEPConvertida);
// };

// buscaEndereco();

// ---------------------------------------------------------------
// TRATAMENTO DE ERROS COM TRY CATCH

// async function buscaEndereco() {
//     try {
//         var consultaCEP = await fetch('https://viacep.com.br/ws/01001250/json/')
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         console.log(consultaCEPConvertida);
//     } catch (erro){
//         console.log(erro);
//     }
    
// };
// buscaEndereco();


// --------------------------------------------------------------------
// PROMISE ALL

// async function buscaEndereco(cep) {
//     try {
//         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         console.log(consultaCEPConvertida);
//         return consultaCEPConvertida;
//     } catch (erro){
//         console.log(erro);
//     }
// }

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

// -------------------------------------------------------------------
// CONSULTA DINAMICA COM FOCUSOUT

// async function buscaEndereco(cep) {
//     try {
//         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         console.log(consultaCEPConvertida);
//         return consultaCEPConvertida;
//     } catch (erro){
//         console.log(erro);
//     }
// }

// var cep = document.getElementById('cep');
// cep.addEventListener('focusout', () => buscaEndereco(cep.value));

// ----------------------------------------------------------------------
// preenchimento automático 

// async function buscaEndereco(cep) {
//     try {
//         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         var cidade = document.getElementById('cidade');
//         var logradouro = document.getElementById('endereco');
//         var estado = document.getElementById('estado');
//         var bairro = document.getElementById('bairro');

//         cidade.value = consultaCEPConvertida.localidade;
//         logradouro.value = consultaCEPConvertida.logradouro;
//         estado.value = consultaCEPConvertida.uf;
//         bairro.value = consultaCEPConvertida.bairro;

//         console.log(consultaCEPConvertida);
//         return consultaCEPConvertida;
//     } catch (erro){
//         console.log(erro);
//     }
// }

// var cep = document.getElementById('cep');
// cep.addEventListener('focusout', () => buscaEndereco(cep.value));



async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro'); //
    mensagemErro.innerHTML = ""; // 
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP Inválido. Tente novamente!</p>`; //
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));