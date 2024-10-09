const alunos = {
    Joao: 6,
    Maria: 8,
    Pedro: 5,
    Ana: 9,
    Lucas: 7
  };
  
  for (let aluno in alunos) {
    if (alunos[aluno] >= 7) {
      console.log(`${aluno}: ${alunos[aluno]}`);
    }
  }