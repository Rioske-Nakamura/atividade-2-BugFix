const contas = {
    conta1: {
        nome: 'C1',
        saldo: 1000,
    },
    conta2: {
        nome: 'C2',
        saldo: 1000,
    },
    conta3: {
        nome: 'C3',
        saldo: 1000,
    },
    conta4: {
        nome: 'C4',
        saldo: 1000,
    },
};

function depositar(conta, valor) {
    conta.saldo += valor;
}

function sacar(conta, valor) {
    conta.saldo -= valor;
}

function transferir(contaOrigem, contaDestino, valor) {
    sacar(contaOrigem, valor);
    depositar(contaDestino, valor);
}

function extrato(conta) {
    console.log(conta);
}

function mostrarContas() {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Limpa o conteúdo anterior, se houver

    // Itera sobre cada conta e cria um elemento para exibir
    for (const key in contas) {
        const conta = contas[key];
        const contaDiv = document.createElement('div');
        contaDiv.textContent = `Conta: ${conta.nome}, Saldo: R$${conta.saldo}`;
        root.appendChild(contaDiv);
    }
}

// Chama a função para exibir as contas ao carregar a página
mostrarContas();
