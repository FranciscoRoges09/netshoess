const nomes = ["Gabriela", "João", "Camila", "Lucas", "Aline", "Pedro"];
const popup = document.getElementById("popup-nome-mensagem");
const nomeSpan = document.getElementById("nome-mensagem");

let index = 0;

function exibirNotificacao() {
  nomeSpan.textContent = nomes[index];
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 6000);

  index = (index + 1) % nomes.length;
}

setTimeout(exibirNotificacao, 2000);
setInterval(exibirNotificacao, 12000);
