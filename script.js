//var nome = "Leonardo Ferraz";
// var id = 22;
// alert("Olá " + nome + " #" + id);
// console.log(nome + " tem " + id + " anos");

// var n1 = 5;
// var n2 = 10;

// console.log(n1 + n2);

// var frase = "Brasil é o campeão da copa!";

// console.log(frase.replace("Brasil", "França"));
// console.log(frase.toLowerCase());
// console.log(frase.toUpperCase());

// var lista = ["banana", "maça", "pera"];
// console.log(lista);
// alert("Minha fruta favorita é a " + lista[0]);
// lista.push("uva");
// lista.pop(uva)
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.toString()[2]);
// console.log(lista.join(" - "));

// var fruta = { nome: "banana", cor: "amarela" };
// console.log(fruta);
// alert(fruta.nome + " tem a cor " + fruta.cor);

// var frutas = [
//   { nome: "banana", cor: "amarela" },
//   { nome: "maça", cor: "vermelha" },
//   { nome: "pera", cor: "verde" },
// ];
// console.log(frutas);
// alert("A " + frutas[01].nome + " é da cor " + frutas[01].cor);

// var idade = prompt("Qual a sua idade?");

// if (idade >= 18) {
//   alert("Entrada liberada! Seja vem vindo");
// } else {
//   alert("Entrada não liberada!");
// }

// var count = 0;
// while (count < 5) {
//   console.log(count);
//   alert(count);
//   count++;
// }

// var count;
// for (count = 0; count <= 5; count++);
// alert(count);

// var d = new Date();

// alert(d.getFullYear());

// function soma(n1, n2) {
//   return n1 + n2;
// }

// alert(soma(5, 10));

// function setReplace(frase, nome, novoNome) {
//   return frase.replace(nome, novoNome);
// }

// alert(setReplace("Vai Japão!", "Japão", "Brasil"));

// function validaIdade(idade) {
//   var validar;
//   if (idade >= 18) {
//     validar = true;
//   } else {
//     validar = false;
//   }
// return validar;
// }
// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));

function clicou() {
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigado por clicar :D</b>";
  console.log(document.getElementById("agradecimento"));
}
function redirecionar() {
  window.open("https://www.linkedin.com/in/leonardo-ferraz-186620171/");
}

function trocar(element) {
  //   document.getElementById("mousemove").innerHTML =
  //     "Obrigado por passar o mouse!";
  element.innerHTML = "Obrigado por passar o mouse!";
  //alert("trocar texto");
}

function voltar(element) {
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
  element.innerHTML = "Passe o mouse aqui!";
}

function load() {
  alert("Pagina carregada! Bem vindo");
}

function change(element) {
  console.log(element.value);
}
