/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
     return capitalInicial+(capitalInicial * taxaDeJuros * tempoDeAplicacao)
}

function jurosComposto(capitalInicial, taxasDeJuros, tempoDeAplicacao){
     return capitalInicial * (1+taxaDeJuros) ** tempo
}

console.log(jurosSimples(1000, 10, 2));
