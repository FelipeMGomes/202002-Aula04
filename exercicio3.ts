let valores: Array<number> = [0];
let calcular: number = 0;

for (let i = 0; i < 100; i++) {

    valores.push(Math.round(Math.random() * 1000));

    calcular += valores[i];
}

valores.splice(0, 1);

calcular = valores.reduce((acc, numero) => acc + numero, 0);

console.log(`Array gerado: ${valores}`);
console.log(`Média dos valores: ${calcular / 100}`);
console.log(`Array somado: ${calcular}`);
console.log(`Array Ordenado: ${valores.sort()}`);