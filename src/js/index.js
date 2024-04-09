/*
    Objetivo 1 - quando o usuário clicar no botãode mostrar mais deve abrir os projetos que estão escondidos no html

       Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuárioclicar en cima dele

       Passo 2 - identificar o clique no notão

       Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder obotão de mostrar mais
      Passo 1 - pegar o botão e esconder ele
*/

//Objetivo 1 - quando o usuário clicar no botãode mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuárioc licar em cima dele

const botãoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botãoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botãoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
