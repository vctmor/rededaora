/*
Seletores são métodos de selecionam tags HTML
e textos que já existem nela
*/

let amigos = document.getElementById("colegas-de-classe");

let inimigo = document.getElementsByClassName("inimigo");

alert('Existem ' + inimigo + ' paragrafos');

let frase = document.getElementById("frase-do-dia");
frase.innerHTML = 'Fala meu irmão'

let textos = document.getElementsByTagName('p')
textos.innerHTML = 'oiiiiii'

var num =textos.lenght;

alert('Existem ' + num + ' paragrafos');