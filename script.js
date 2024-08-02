//Operações com Strings

function javaScript(){
    let frase = "JavaScript é incrível!";
    
    
    console.log(frase.length);
    console.log(frase.slice(13, 21));
    console.log(frase.replace("incrível", "fantástico"));
    }
    javaScript()
    
//conversoes de number

function numberConversion(){
    let numStr = "123.45";
let num = Math.round(parseFloat(numStr));
console.log("Número arredondado:", num);
console.log("Número com 3 casas decimais:", num.toFixed(3));
console.log("numStr é NaN?", isNaN(Number(numStr)));
}
numberConversion()


//Comparações Booleanas

function cincoDez(){
    let a = 5;
    let b = 10;


console.log(a < b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
}
cincoDez()

//Trabalhando com Null e Undefined

function variavelVazia1(){
    let variavelVazia2 = null;


console.log(variavelVazia2 == undefined)
console.log(variavelVazia2 === undefined)
}
    variavelVazia1()
   
function question3(){
    let semvalor
console.log(semvalor == undefined)
console.log(semvalor === undefined)
}
question3()


//Uso de Symbol

let Chave1= Symbol('chave11')
let Chave2 = Symbol('chave11')
let IGUAIS = Chave1 === Chave2


console.log('São iguais?', IGUAIS)


let usuario = {};
usuario[chave1] = 'Valor da propriedade';
console.log(usuario[chave1]);

//Manipulação de Biglnt

const grandeNumero1 = BigInt('123456789012345678901234567890');
const grandeNumero2 = BigInt('987654321098765432109876543210');


const soma = grandeNumero1 + grandeNumero2;
const subtracao = grandeNumero1 - grandeNumero2;
const multiplicacao = grandeNumero1 * grandeNumero2;
const divisao = grandeNumero1 / grandeNumero2;


console.log('Soma:', soma);
console.log('Subtração:', subtracao);
console.log('Multiplicação:', multiplicacao);
console.log('Divisão:', divisao);


const maiorQue = grandeNumero1 > grandeNumero2;
console.log('grandeNumero1 é maior que grandeNumero2?', maiorQue);

//Criação e manipulação de objetos

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    detalhes: function() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
  };
 
  carro.detalhes();
 
  carro.cor = 'azul';
 
  console.log(carro);

//Arrays Multidimensionais

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];


console.log("Matriz inicial:");
console.log(matriz);


let valor = matriz[1][2];
console.log("Valor na segunda linha, terceira coluna:", valor);


matriz[0][1] = 99;


console.log("Matriz atualizada:");
console.log(matriz);


//Funções Avançadas



function multiplica(a, b) {
    return a * b;
}


let resultadoMultiplica = multiplica(7, 8);
console.log("Resultado de multiplica(7, 8):", resultadoMultiplica);


function quadrado(n) {
    return n * n;
}




let numeros = [1, 2, 3, 4, 5];
let numerosQuadrados = numeros.map(quadrado);
console.log("Array de quadrados:", numerosQuadrados);


//Manipulação de Datas

let primeiroDiaDoAno = new Date(new Date().getFullYear(), 0, 1);


let hoje = new Date();


let diferencaEmDias = Math.floor((hoje - primeiroDiaDoAno) / (1000 * 60 * 60 * 24));
console.log("Diferença em dias desde o primeiro dia do ano:", diferencaEmDias);


let dia = hoje.getDate().toString().padStart(2, '0');
let mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
let ano = hoje.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;
console.log("Data de hoje formatada:", dataFormatada);
