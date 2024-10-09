const objeto = {
    nome: "Mario",
    idade: 30,
    cidade: "Salvador"
  };

  for (let propriedade in objeto){
    console.log(`${propriedade}: ${objeto[propriedade]}`);
  }