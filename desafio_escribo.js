function somatorioDivisiveis35AteN() {
    // Solicitar ao usuário que insira um número inteiro positivo
    let numero = prompt("Digite um número inteiro positivo:");

    // Verificar se o usuário cancelou a entrada ou não forneceu um número válido
    if (numero === null || isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    numero = parseInt(numero);

    let somatorio = 0;

    // Calcular o somatório dos valores inteiros divisíveis por 3 ou 5 que são menores que o número fornecido
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    // Exibir o resultado
    alert("O somatório dos valores divisíveis por 3 ou 5 até " + numero + " é: " + somatorio);
}

// Chamar a função para calcular o somatório com a entrada do usuário
somatorioDivisiveis35AteN();
