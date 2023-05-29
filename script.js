function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(20, 80);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

function somdoamor() {
    var audio = new Audio("./imagens/musica.mp3");
    audio.play();
}

function mostrarConteudo() {
    document.getElementById("conteudo").style.display = "flex";
}

function executarFuncoes() {
    somdoamor();
    mostrarConteudo();
    document.getElementById("som").style.display = "none";
  }

  function mostrarConteudo2() {
    document.getElementById("conteudo2").style.display = "flex";
    document.getElementById("conteudo").style.display = "none";
}