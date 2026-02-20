const botao = document.querySelector("#btn-mudar");

botao.addEventListener("mouseenter", function() {
  botao.classList.add("ativo");
})

botao.addEventListener("mouseleave", function(){
      botao.classList.remove("ativo");
})

function aoclicar() {
  alert("Eu fui clicado!");
}
