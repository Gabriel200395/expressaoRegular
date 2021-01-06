//exec: executa o regExp. retornando os detalhes
//test: testa a regExp. retornando true e  false
// "\: barra escapalo para encontrar o valor"
// ^ : inicio com valor
// $ : fim terminar valor
// []: quantidade de caracteres
// {}: quantificadores
// ? zero ou um
// * zero ou mais
// + um ou mais
// modificadores g-global: i: case-incentive:  m-multline

//let regExp = /^\(\d{2}\)\s\d{4}-\d{4}$/;
//let telefone1 = "(48) 9408-5402";

// let regExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
// let regExp = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;
let regExp = /(\d{3}\.){2}\d{3}\-\d{2}/;

let cpf = "051.503.831-80";
console.log(regExp.exec(cpf));
