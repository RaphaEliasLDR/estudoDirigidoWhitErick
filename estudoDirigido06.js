const notas = {
    Joao: 7,
    Maria: 8,
    Pedro: 6
};
  
let maiorNota = 0;
let menorNota = 1000;
  
for (let aluno in notas) {
    if (notas[aluno] > maiorNota) {
      maiorNota = notas[aluno];
    }
    if (notas[aluno] < menorNota) {
      menorNota = notas[aluno];
    }
}
  
console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);
  