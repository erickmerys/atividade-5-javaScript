var readlineSync = require('readline-sync');
 
// Wait for user's response.
var raioEsfera = readlineSync.question('Qual o raio da esfera? ');

var volumeEsfera = 4 * 3.14 * (raioEsfera**3) / 3;
console.log('O volume da Esfera é: '+volumeEsfera);