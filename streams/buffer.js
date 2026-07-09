// Buffer é uma area de memoria que armazena dados temporariamente enquanto eles sao movidos de um lugar para outro, 
// ele é usado para melhorar a eficiencia do processamento de dados, 
// evitando que o processador fique ocioso enquanto espera por dados de entrada ou saida.
// É mais performatico do que trabalhar com strings, pois ele trabalha com bytes, e não com caracteres, 
// o que permite manipular dados binarios de forma mais eficiente. 
// O Buffer foi criado no node justamente pela incapacidade do javascript de lidar com dados binarios, pois ele trabalha apenas com strings e objetos.  

const buf = Buffer.from('oi')

console.log(buf.toJSON())