const prompt = require('prompt-sync')();

let opcao = 0
while (opcao !== 4) {
    console.log("\n=== MENU ===");

    opcao = parseInt(
        prompt("[1] Pesquisa\n[2] Cadastrar\n[3] Venda\n[4] Sair\nEscolha: "),
        10
    );

    console.log("VOCÊ ESCOLHEU:", opcao);

    if (opcao === 4) {
        console.log("--- Encerrando a sessão ---");
    } else if (opcao === 3) {
        SimularVenda();
    } else if (opcao === 2) {
        CadastrarProduto();
    } else if (opcao === 1) {
        ProcurarProdutos();
    } else {
        console.log("Opção inválida.");
    }
}