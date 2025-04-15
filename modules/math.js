///Crie um módulo math.js com funções como soma, subtrai, etc., e use elas no index.js.
function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

function multiplica(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero!");
      }

    return a / b;
}

// Exportando as funções para poder usar em outros arquivos
module.exports = {
    soma,
    subtrai,
    multiplica,
    divide,
}