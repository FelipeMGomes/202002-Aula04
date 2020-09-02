  
let ValorRecebido: number = 2;
let ValorDaAposta: number = Math.round(Math.random() * 6);

const aposta: any = (): string => ValorRecebido === ValorDaAposta ? 'Ganhou' : 'Perdeu';

console.log(`Resultado da aposta: ${ValorDaAposta}`);
console.log(aposta());