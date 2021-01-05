//exact: executa o regExp. retornando os detalhes
//test: testa a regExp. retornando true e  false
// "\: barra escapalo para encontrar o valor"
// ^ : inicio com valor
// $ : fim terminar valor
// []: quantidade de caracteres
// {}: quantificadores

let regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
let telefone = "(48) 9408-5402";
console.log(regExp.test(telefone));
