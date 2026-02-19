const botao = document.getElementById("btn-cadastrar"); // Constante do botão de cadastro.
const botao2 = document.getElementById("btn-apagar"); // Constante do botão de apagar todos os itens.

botao.addEventListener("click", function() {
    let nome = document.getElementById("produto").value; // Varíavel local que pega o valor do input com id = produto
    let item = document.createElement("li"); // Cria um elemento <li> (Item da lista)
    let adicionar = document.createElement("button"); // Junto ao item criado, ele cria um botão "+" ao lado. (Filho do LI)
    let remover = document.createElement("button"); // Junto ao item criado, ele cria um botão "-" ao lado. (FIlho do LI)
    let texto = document.createElement("span"); // Cria um elemento de span, para que não haja conflito com o textcontent do Item, assim, isolamos o texto, dos "irmãos do item" 
    let lista = document.getElementById("lista-produtos"); // Pega o ID da lista e verifica os LI dentro dela.
    let quantidade = 0; // Define quantidade para cada item automaticamente.
    adicionar.textContent = "+"; // Atribuição de texto aos botões filho.
    remover.textContent = "-"; // Atribuição de texto aos botões filho.
    texto.textContent = nome + " — Quantidade: " + quantidade; // Exemplifica o conteúdo de texto que a variável Texto terá.

    if (nome.trim() !== "") { // Condicional, caso o input não esteja vazio, ele segue normalmente

    adicionar.addEventListener("click", function(){ // Adiciona um listener para "escutar" caso haja um clique no botão adicionar.
        quantidade++;
        texto.textContent = nome + " — Quantidade: " + quantidade;
    })

    remover.addEventListener("click", function(){ // Adiciona um listener para escutar caso haja um clique no botão remover
        if (quantidade > 0) { // Se a quantidade do LI, foi maior que 0, ele remove um.
            quantidade--
            texto.textContent = nome +  "— Quantidade: " + quantidade;
        } else { // Se a quantidade for menor que 0, ele manda um confirm, e caso confirmado, ele apaga o item da lista.
            let confirmacao = confirm("Tem certeza que deseja excluir esse item da lista?")
            if (confirmacao) {
                alert("Item excluído!") // Alerta caso confirmação for true.
                lista.removeChild(item);
            } else {
                alert("Ação cancelada.") // Alerta caso confirmação for false.
            }
        }    
    })

    item.appendChild(texto); // Anexa os "filhos" do item.
    item.appendChild(adicionar); // Anexa os "filhos" do item.
    item.appendChild(remover); // Anexa os "filhos" do item.

    document.getElementById("lista-produtos").appendChild(item); // Anexa o filho item, no pai lista.
    document.getElementById("produto").value = ""; // Limpa o cache do input, para que não haja duplicação.
    } else { // Caso o input esteja vazio, ele emite essa mensagem.
        alert("Escreva algo.");
    }
});

botao2.addEventListener("click", function() {
    let lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
})