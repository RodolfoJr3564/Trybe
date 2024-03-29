/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b,
 definidas no começo com os valores que serão operados. Faça programas para:
*/
/* Módulo */
function modulo( a , b )
{

    resultado = a % b ;

} ;

/* Multiplicação */
function multiplicacao( a , b )
{

    resultado = a * b ;

} ;

/* Divisão */
function divisao( a , b )
{

    resultado = a / b ;

} ;

/* Subtracão */
function subtracao( a , b )
{

    resultado = a - b ;

} ;

/* Adição */
function soma( a , b )
{

    resultado = a + b ;

} ;

/* 
    Faça um programa que retorne o maior de dois números. 
    Defina no começo do programa duas variáveis com os valores que serão comparados.
 */
function maiorNumero( a , b )
{   
  return ( a > b ? a : b ) ;

} ; 

/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados. */

function maiorDeTres( a , b , c )
{

    if ( a > b )
    {
        
        return a > c ? a : c ;

    }

    else
    {

        return b > c ? b : c  ;

    } ;

} ;

/* Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" 
se for negativo e "zero" caso contrário.
 */

function positivoNegativo( a ) 
{

    if ( a >= 0 )
    {

       return a != 0 ? "positive" : "zero" ;

    }

    else 
    {

        return "negative" ;

    } ;

} ;

/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
 */

function trianguloVerificacao( aAngulo , bAngulo , cAngulo )
{

   return (aAngulo + bAngulo + cAngulo === 180) ? "true" : "false" ;

}

/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 */

/*
nomePeca.toLowerCase() == xadrezPeca[i].nomePeca? console.log(xadrezPeca[i].movimentoPeca) : console.log("nome inválido") ; 
console.log(i)*/
 function xadrezPecas( nomePeca )
 {

    const xadrezPeca = 
    [ 
        {
            nomePeca : "rei" , 
            movimentoPeca : "Move-se 1 casa por jogada" 
        } ,
       
        {

            nomePeca : "rainha" , 
            movimentoPeca : "Move-se em todas as direções" 
    
        } ,

        {

            nomePeca : "bispo" , 
            movimentoPeca : "Move-se em diagonal" 
    
        } ,

        {

            nomePeca : "cavalo" , 
            movimentoPeca : "Move-se em 2 mais uma curva formando um L" 
    
        } ,

        {

            nomePeca : "torre" , 
            movimentoPeca : "Move-se para frente e pra os lados." 
    
        } ,

        {

            nomePeca : "peão" , 
            movimentoPeca : "Move-se apenas 1 casa para frente" 
    
        } ,

    ] ;

    for(let i = 0 ; i < 5 ; i++ )
    {
        if( nomePeca.toLowerCase() == xadrezPeca[i].nomePeca )
        {

            return xadrezPeca[i].movimentoPeca;

        }
        else if ( i == 4 && nomePeca.toLowerCase() != xadrezPeca[i].nomePeca )
        {

            console.log("nome inválido")

        }

    } ;

 } ;

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem > 90 -> A
Porcentagem > 80 -> B
Porcentagem > 70 -> C
Porcentagem > 60 -> D
Porcentagem > 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
function converteNota(porcentagemNota)
{
    let c , nota = [ "F" , "E" , "D" , "C" , "B" , "A" ] ;

   c = Math.ceil(porcentagemNota/10) - 5;

   console.log(nota[c]) ;
 

};

/* Bonus: use somente um if.
Escreva um programa que defina três números em variáveis no 
seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false. */
 function elasSaoPares( a , b , c )
 {

    let i = 0, variavel = [ a , b , c ] ;

    while( i < 3 )
    {
        
        if( variavel[i] % 2 != 0 )
        {

            return "False!" ;

        };

        i++;

    }

    return "True" ;

 }

/* Bonus: use somente um if.
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. A partir dos valores, 
calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. */
function custoValerDeVenda( custo , valorDeVenda )
{
    custo > 0 || valorDeVenda > 0 ? "Erro!" : "" ;

    return ( valorDeVenda - (custo +( custo * 0.2) ) )*1000; 

};

/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
 Faça um programa que,
dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 

Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000,
 ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, s
endo a alíquota, então, de 7.5%, 
com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */
function saLiquido(saBruto)
{
    let sal = saBruto ;

    if ( saBruto < 1556.94 ){ sal -= (sal * 0.8) }
    else if ( saBruto > 1556.95 && saBruto < 2594.92 ){ sal -= (sal * 0.9) }
    else if ( saBruto > 2594.93 && saBruto < 5189.82 ){ sal -= (sal * 0.11) }
    else { saBruto -= 570.88 } ;
    console.log(sal);
    if ( sal > 1903.98 && sal < 2826.65 ){ sal -= sal*0.075 - 142.80 }
    else if ( sal > 2826.66 && sal < 3751.05 ){ sal -= sal*0.15 - 354.80 }
    else if ( sal > 3751.06  && sal < 4664.68 ){ sal -= sal*0.225 - 636.13 }
    else if ( sal > 4664.68 ){ sal -= sal*0.275 - 869.36 } ;

    return sal ;
} ;
