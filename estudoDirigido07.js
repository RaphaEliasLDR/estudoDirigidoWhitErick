const salarios = {
    Joao: 2500,
    Maria: 3000,
    Pedro: 1500,
};
  
let somaSalarios = 0;
let totalFuncionarios = 0;
  
for (let funcionario in salarios) {
    somaSalarios += salarios[funcionario];
    totalFuncionarios++;
}
  
const mediaSalario = somaSalarios / totalFuncionarios;
  
console.log("Media do salario:", mediaSalario);
  