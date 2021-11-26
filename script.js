function recebe_dados(num) {
    var numero = document.getElementById('display').innerHTML;
    if (numero.length < 10) {
        document.getElementById('display').innerHTML = numero + num;
    }
    else {
        window.alert ("Você inseriu mais caracteres do que se pode (máximo de 10 caracteres")
    }
}

function limpa_tela() {
    document.getElementById('display').innerHTML = " ";
}

function apaga_1() {
    var display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length - 1);
}

function calcular() {
    var display = document.getElementById('display').innerHTML;
    if (display) {
        document.getElementById('display').innerHTML = eval(display)
    } else {
        document.getElementById('display').innerHTML = "Não foi inserido nada"
    }
}
function inverter_sinal () {
    var display = document.getElementById('display').innerHTML;
    
}