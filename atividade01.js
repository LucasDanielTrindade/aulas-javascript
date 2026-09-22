const prompt = require('prompt-sync')();

let Itens = [];
let opcao = 0;

function gerarInteiroInclusivo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SimularVenda() {
    let opcao = Number(prompt("Insira a quantidade de itens que serão vendidos: "));

    console.log("Quantidade de vendas:", opcao);
    if (Itens.length > 0) {
        for (let i = 0; i < opcao; i++) {
            let indice = gerarInteiroInclusivo(0, Itens.length - 1);
            if (Itens[indice].Estoque > 0) {
                Itens[indice].Estoque -= 1;
                console.log("Item vendido:", Itens[indice]);
            }
        }
        for (let item of Itens) {
            if (item.Estoque <= 0) {
                console.log(`Item: ${item} removido por ter 0 unidades disponiveis.`)
                Itens.splice(item)
            }

        }
        console.table(Itens);
    }
}

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

        let raridade = "Comum";mbgbs
        let emDestaque = false;

        if (preco >= 50 && preco < 100) {
            raridade = "Incomum"
        } else if (preco >= 100 && preco < 500) {
            raridade = "Raro";
        } else if (preco >= 500) {
            raridade = "Lendário";
            emDestaque = true;
        }
        emPromocao = ((Itens.length + 1) % 2 == 0)
        let FichaItemTemplate = {
            Nome: nome,
            Preco: preco,
            Raridade: raridade,
            Estoque: 12,
            Destaque: emDestaque,
            emPromocao: emPromocao
        };

        Itens.push(FichaItemTemplate);
        if (Itens.length % 2 == 0) {
            console.log(`--- Item ${nome} em promoção da semana! ---`);
        }
        console.log(`--- Item ${i} cadastrado com sucesso! ---`);
    }
}

while (opcao !== 4) {
    console.log("\n=== MENU ===");
    opcao = Number(prompt("[1] Pesquisa dos produtos\n[2] Cadastrar produtos\n[3] Simular Venda\n[4] Encerrar Sessão\nEscolha: "));

    if (opcao === 4) {
        console.log("--- Encerrando a sessão ---");
    } else if (opcao === 3) {
        SimularVenda();
    } else if (opcao === 2) {
        CadastrarProduto();
    } else if (opcao === 1) {
        ProcurarProdutos();
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}