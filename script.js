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
