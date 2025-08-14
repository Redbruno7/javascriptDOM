// === Exemplo com var ===
var x = 10;
var x = 20; // Redeclaração permitida

console.log(x); // Resultado:20

// === Exemplo com let ===
let y = 30;

// let y = 40; // Erro: redeclaração não permitida
y = 40;        // Reatribuição permitida
console.log(y); // Resultado: 40

// === Exemplo com const ===
const z = 50;

// z = 60; // Erro: reatribuição não permitida
console.log(z);

// Escopo do bloco (Diferença entre var e let/const)
{
    var a = 1; // vaza para fora do bloco
    let b = 2;
    const c = 3; // Restrita ao bloco
}

console.log(a); // 1
// consolo.log(b); // Erro: b não definido
// consolo.log(c); // Erro: c não definido
