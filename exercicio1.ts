let peso: number = 56;
let altura: number = 1.80;

let imc: number = peso / (Math.pow(altura, 2));

imc = parseFloat(imc.toFixed(2));

const calculaIMC: any = () => {
    
    if (imc < 18.5)
        console.log("\nO Seu IMC é: " + imc + " \nVoce esta Abaixo do Peso");

    else if ((imc >= 18.5) && (imc <= 24.9))
        console.log("\nO Seu IMC é: " + imc + " Voce esta no Peso Ideal");

    else if ((imc >= 25) && (imc <= 29.9))
        console.log("\nO Seu IMC é: " + imc + " Voce esta Acima do Peso");

    else if ((imc >= 30) && (imc <= 34.9))
        console.log("\nO Seu IMC é: " + imc + " Voce esta em Obesidade Grau 1");

    else if ((imc >= 35) && (imc <= 40))
        console.log("\nO Seu IMC é: " + imc + " Voce esta em Obesidade Grau 2");

    else
        console.log("\nO Seu IMC é: " + imc + " Voce esta em Obesidade Grau 3");

}

calculaIMC();