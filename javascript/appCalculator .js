function Inserir(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num
}

function Limpar() {
    document.getElementById("resultado").innerHTML = ""; 
}

function Apagar() {
    var apagar = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = apagar.substring(0, apagar.length -1);
}

function Igual() {
    var resultado = document.getElementById("resultado").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "Adicione algum numero"
    }
}