//exec: executa o regExp. retornando os detalhes
//test: testa a regExp. retornando true e  false
// "\: barra escapalo para encontrar o valor"
// ^ : inicio com valor
// $ : fim terminar valor
// []: quantidade de caracteres
// {}: quantificadores
// ? zero ou um
// * zero ou mais : {0,} -> ele vai começa pegar um Quantificador de 0 a n
// + um ou mais {1,}  ele vai começa pegar um Quantificador de 1 a n
// modificadores g-global: i: case-incentive:  m-multline: checar tudo

regExp = /^(\d{2}\/){2}\d{4}$/;
let data = "20/03/2020";
console.log(regExp.test(data));

regExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/;
let cpf = "051.503.831-80";
console.log(regExp.test(cpf));

regExp = /^\d{1}(.\d{3}){2}$/;
let rg = "3.171.373";
console.log(regExp.test(rg));
