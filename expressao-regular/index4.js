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

let regExp = /^\(\d{2}\)\s\d{4}-\d{4}$/;
let telefone1 = "(48) 9408-5402";
console.log(regExp.exec(telefone1));
