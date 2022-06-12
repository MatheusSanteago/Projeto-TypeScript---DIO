"use strict";
// DESAFIO 1
const employeeOne = {
    code: 10,
    name: "John",
};
const person1 = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
};
const person2 = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
};
const person3 = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};
const person4 = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
};
// DESAFIO 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoT = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoT += soma;
        campoSaldo.innerHTML = saldoT.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoT = 0;
        campoSaldo.innerHTML = saldoT.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
