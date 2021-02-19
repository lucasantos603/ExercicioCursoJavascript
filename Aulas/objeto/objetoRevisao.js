const produto = new Object();

produto.nome = 'Cadeira'

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: '56',
        endereco: {
            logradouro: 'Rua abc',
            numero: '123'
        }
    },
    condutores: [{
        nome: 'junior',
        idade: '19'
    }, 
    {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //
    }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)