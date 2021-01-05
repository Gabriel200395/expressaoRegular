//exact: executa o regExp. retornando os detalhes
//test: testa a regExp. retornando true e  false
// "\: barra escapalo para encontrar o valor"
let regExp = /\(48\)9999-9999/;
let telefone = "(48)9999-9999";
console.log(regExp.test(telefone));
