const prompt = require('prompt-sync')();

let Itens = [];
let opcao = 0;
/*
ParseFloat serve para converter um texto
Trim tira espaços em branco do codigo
Console.Table faz uma tabela para ficar mais parecida com um catalogo
IsNan(variavel) verifica se uma variavel não é um numero(Nan = not a number)
ParseInt serve para converter strings em números inteiros
*/
function gerarInteiroInclusivo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Etapa 4 Simulação de venda
function SimularVenda() {
    let opcao = parseInt(prompt("Insira a quantidade de itens que serão vendidos: "));
    while (isNaN(opcao)||opcao<=0){
        opcao = parseFloat(prompt("Insira a quantidade de itens que serão vendidos: "));
    }   
    console.log("Quantidade de vendas:", opcao);
    if (Itens.length > 0) {
        for (let i = 0; i < opcao; i++) {
            let indice = gerarInteiroInclusivo(0, Itens.length - 1);//pega numero aleatorio para parecer mais realista a venda dos itens
            if (Itens[indice].Estoque > 0) {
                Itens[indice].Estoque -= 1;
                console.log("Item vendido:", Itens[indice]);
            }
        }
       // Remove os itens que ficaram sem estoque
       for (let i = Itens.length - 1; i >= 0; i--) {
        if (Itens[i].Estoque <= 0) {
            console.log(
                `Item: ${Itens[i].Nome} removido por ter 0 unidades disponíveis.`
            );

            Itens.splice(i, 1);
        }
    }
        console.table(Itens);
    }
}
//etapa 5 catalogo + busca de itens no catalogo
function ProcurarProdutos() {
    console.log("\n--- Itens Disponíveis ---");
    console.table(Itens);

    let escolha = prompt("Deseja fazer uma busca mais detalhada? [1]Sim [2]Não: ");
    if (escolha === "1") {
        let busca = prompt("Insira a palavra-chave pelo qual deseja buscar: ").trim().toLowerCase();
        // sistema de busca
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
// etapa 3 cadastrar produtos + cadastrar quantos produtos quiser repetidamente
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
            raridade = "Incomum"
        } else if (preco >= 100 && preco < 500) {
            raridade = "Raro";
        } else if (preco >= 500) {
            raridade = "Lendário";
            emDestaque = true;
        }
        let emPromocao = (i % 2 == 0)
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
// menu, não foi pedido mas fica mais organizado assim

function menu(){
    console.log("\n=== MENU ===");
    opcao = parseFloat(prompt("[1] Pesquisa dos produtos\n[2] Cadastrar produtos\n[3] Simular Venda\n[4] Encerrar Sessão\nEscolha: "));

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

while (opcao !== 4) {
    menu()
}