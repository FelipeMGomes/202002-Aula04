let somaPar: number = 0;
let somaImpar: number = 0;


const somar: any = () => {

    for (let i: number = 2; i <= 1000; i += 2) {
        somaPar = somaPar + i;
    }

    for (let i: number = 1; i < 1000; i += 2) {
        somaImpar = somaImpar + i;
    }
};


somar();
console.log(`Soma dos números pares: ${somaPar}`);
console.log(`Soma dos números ímpares: ${somaImpar}`);