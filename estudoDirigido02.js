const salario = {
    Joao: 3000,
    Maria: 3000,
    Pedro: 1500,
    Ana: 4500
};


let somaTotal = 0;

for (let pessoa in salario) {
  somaTotal += salario[pessoa];
}

console.log("Soma total:", somaTotal);