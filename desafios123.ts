// DESAFIO 1

interface Employee {
    code: number, 
    name: string
}

const employeeOne: Employee = {
    code: 10,
    name: "John",
};

// DESAFIO 2 

interface People {
    nome: string,
    idade: number, 
    profissao: string
}

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
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoT = 0;

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoT += soma
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

