// 1. Seleção dos elementos
const titulo = document.getElementById('titulo-principal');
const botao = document.getElementById('botao-mudar');

// Variável para controlar o estado
let modificado = false;

// 2. Evento de clique
botao.addEventListener('click', function() {

    if (!modificado) {
        // Estado modificado
        titulo.textContent = "Texto Modificado com Sucesso!";
        titulo.style.color = "#9a0002";
        titulo.style.fontSize = "3rem";

        modificado = true;
    } else {
        // Estado original
        titulo.textContent = "Texto Original";
        titulo.style.color = "";
        titulo.style.fontSize = "";

        modificado = false;
    }

});
