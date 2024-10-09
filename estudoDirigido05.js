const produtos = {
    arroz: 10,
    feijao: 8,
    macarrao: 15,
    leite: 5,
    carne: 12
};

const Vendidos = ["arroz", "feijao", "macarrao","leite", "carne"];
  
for (let i = 0; i < Vendidos.length; i++) {
    const produto = Vendidos[i];

    if (produtos[produto] > 0) {
        produtos[produto]--;
    }
}  
 
console.log("Estoque final:", produtos);
  