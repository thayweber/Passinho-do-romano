var cifraDecodificar = []
var fraseCodificada = ""
var auxiliar = []
var num = []
var cifra = document.querySelector('#cifra')
var incrementando = document.querySelector('#incrementando')
var radio1 = document.querySelector('#cod')
var radio2 = document.querySelector('#decod')
var mensagem = document.querySelector('#mensagem')
var iniciar = document.querySelector('#iniciar')
var codificacao = document.querySelector('#codificacao')
var escolha = document.querySelector('#escolha')

escolha.addEventListener('change', function (event) {
    console.log(escolha.value);
    if (escolha.value == 'cifra') {
        incrementando.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label><input type="number" id="incremento">`;
    } else if (escolha.value == 'base64') {
        incrementando.innerHTML = ""
    }
})

radio1.addEventListener('click', function (event) {
    mensagem.innerText = `Codificar Mensagem!`;
})

radio2.addEventListener('click', function (event) {
    mensagem.innerText = `Decodificar Mensagem!`;
})

iniciar.addEventListener('click', function (event) {
    event.preventDefault();
    if (radio1.checked == true) {
        if (escolha.value == 'cifra') {
            cifraDeCesar()
            codificar()
            codificacao.innerText = fraseCodificada
        } else if (escolha.value == 'base64') {
            codificarBase64()
            codificacao.innerText = valorCodificado
        }
    }
    else if (radio2.checked == true) {
        if (escolha.value == 'cifra') {
            decodeCesar()
            codificacao.innerText = cifraDecodificar
        } else if (escolha.value == 'base64') {
            decodificarBase64()
            codificacao.innerText = valorDecodificado
        }
    }
})

function cifraDeCesar() {
    var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
    var valorFrase = frase.value
    var valorIncremento = incremento.value
    for (var i = 0; i < valorFrase.length; i++) {
        num.push(valorFrase.charCodeAt(i) + parseInt(valorIncremento))
        if (valorFrase.charCodeAt(i) == 88) {
            num[i] = 65 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 89) {
            num[i] = 66 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 90) {
            num[i] = 67 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 120) {
            num[i] = 97 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 121) {
            num[i] = 98 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 122) {
            num[i] = 99 + parseInt(valorIncremento)
            auxiliar[i] = 23
        } else if (valorFrase.charCodeAt(i) == 32) {
            num[i] = 32
            auxiliar[i] = 0
        } else {
            auxiliar[i] = 0
        }
    }
    return num
}

function codificar() {
    for (var i = 0; i < num.length; i++) {
        fraseCodificada += String.fromCharCode(num[i])
    }
    return fraseCodificada
}

function decodeCesar() {
    var frase = document.querySelector('#frase')
    var incremento = document.querySelector('#incremento')
    var caracteres = frase.value;
    var valorFrase = frase.value
    var inc = incremento.value;
    for (var i = 0; i < valorFrase.length; i++) {
        cifraDecodificar.push(valorFrase[i] - parseInt(inc) + auxiliar[i])
    }
    for (var i = 0; i < valorFrase.length; i++) {
        fraseCodificada += String.fromCharCode(valorFrase[i])
    }
    return cifraDecodificar
}

function codificarBase64() {
    var valorCodificado = btoa(document.getElementById("codificacao").value);
    document.getElementById("decodificar").innerText = valorCodificado
}

function decodificarBase64() {
    var valorDecodificado = atob((document.getElementById("codificacao").value).toString());
    console.log(valorDecodificado);
    document.getElementById("codificacao").innerText = valorDecodificado;
}