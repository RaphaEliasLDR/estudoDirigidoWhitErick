const pessoas = [
    { nome: "João", idade: 18 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 42 },
    { nome: "Ana", idade: 15 },
    { nome: "Lucas", idade: 30 },
    { nome: "Carlos", idade: 50 }
  ];
  
  const idade = {
    jovens: [],
    adultos: [],
    idosos: []
  };
  
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    
    if (pessoa.idade <= 20) {
        idade.jovens.push(pessoa.nome);
    } else if (pessoa.idade >= 21 && pessoa.idade <= 40) {
        idade.adultos.push(pessoa.nome);
    } else {
        idade.idosos.push(pessoa.nome);
    }
  }
  
  console.log("Jovens:", idade.jovens);
  console.log("Adultos:", idade.adultos);
  console.log("Idosos:", idade.idosos);