function imc() {
    var peso = (document.getElementById("peso").value);
    var altura = (document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, digite os campos com seu peso e sua altura");
        return;
    }

    var imc = peso / (altura * altura);

    document.getElementById("valor").innerHTML = imc.toFixed(2);

    var descricao = "";
        if (imc < 18.5) {
            descricao = "Você está baixo do peso!";
        } else if (imc >= 18.5 && imc <= 25) {
            descricao = "Você está no peso ideal!";
        } else if (imc > 25 && imc <= 30) {
            descricao = "Você está com sobrepeso!";
        } else if (imc > 30 && imc < 35) {
            descricao = "Você está com obesidade moderada!";
        } else if (imc > 35 && imc < 40) {
            descricao = "Você está com obesidade severa!";
        } else {
            descricao = "Você está com obesidade morbida!";
        }

        document.getElementById("descricao").innerHTML = descricao;
}