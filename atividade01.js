const prompt = require('prompt-sync')();

let Itens = [];
let opcao = 0;

function ProcurarProdutos() {
    console.log("\n--- Itens Disponíveis ---");
    console.table(Itens);

    let escolha = prompt("Deseja fazer uma busca mais detalhada? [1]Sim [2]Não: ");
    if (escolha === "1") {
        let busca = prompt("Insira a palavra-chave pelo qual deseja buscar: ").trim().toLowerCase();
        
        let ArrayBusca = Itens.filter(item =>
            typeof item.Nome === "string" &&
            item.Nome.toLowerCase().includes(busca)
        );

        if (ArrayBusca.length > 0) {
            console.log("\n--- Resultados da busca ---");
            console.table(ArrayBusca);
        } else {
            console.log("\nNenhum item encontrado com essa palavra-chave.");
        }
    }
}

function CadastrarProduto() {
    let qtd = parseInt(prompt("Quantos produtos deseja cadastrar? "), 10);

    if (isNaN(qtd) || qtd <= 0) {
        console.log("Quantidade inválida.");
        return;
    }

    for (let i = 1; i <= qtd; i++) {
        let nome = "";
        while (!nome.trim()) {
            nome = prompt(`Insira o nome do ${i}º item: `).trim();
        }

        let preco = parseFloat(prompt(`Insira o preço do ${i}º item: `));
        while (isNaN(preco) || preco <= 0) {
            preco = parseFloat(prompt(`Preço inválido. Insira novamente o preço do ${i}º item: `));
        }

        let raridade = "Comum";
        let emDestaque = false;

        if (preco >= 50 && preco < 100) {
            raridade = "Incomum";
        } else if (preco >= 100 && preco < 500) {
            raridade = "Raro";
        } else if (preco >= 500) {
            raridade = "Lendário";
            emDestaque = true;
        }

        let FichaItemTemplate = {
            Nome: nome,
            Preco: preco,
            Raridade: raridade,
            Estoque: 12,
            Destaque: emDestaque
        };

        Itens.push(FichaItemTemplate);
        console.log(`--- Item ${i} cadastrado com sucesso! ---`);
    }
}

while (opcao !== "3") {
    console.log("\n=== MENU ===");
    opcao = prompt("[1] Pesquisa dos produtos\n[2] Cadastrar produtos\n[3] Encerrar Sessão\nEscolha: ");

    if (opcao === "3") {
        console.log("--- Encerrando a sessão ---");
    } else if (opcao === "2") {
        CadastrarProduto();
    } else if (opcao === "1") {
        ProcurarProdutos();
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}