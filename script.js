function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(20, 80);
    escreverMensagem()
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
    document.getElementById("img").style.display = "flex";
    document.getElementById("conteudo2").style.display = "none";
}

function executarFuncoes() {
    somdoamor();
    mostrarConteudo();
    document.getElementById("som").style.display = "none";
}

function mostrarConteudo2() {
    document.getElementById("conteudo2").style.display = "flex";
    document.getElementById("conteudo").style.display = "none";
    document.getElementById("mensagens").style.display = "none";
}

var mensagens = [
    "prometo que sou um cara legal. 👍🏽",
    "me dá essa chance por favor 🥺",
    "nunca te pedi nada 🙏",
    "você não vai se arrepender! eu acho 😳",
    "tenho uma ótima playlist 🎶",
    "sei cozinhar muito bem 👨‍🍳",
    "minha mãe fala que eu sou lindo 😎",
    "tenho medo do bicho papão 😬",
    "não sei matemática básica",
    "tenho tdah",
    "o que a gente tava falando mesmo",
    "passei 3 dias fazendo isso por favor",
    "aprendi javascript só pra fazer isso é sério",
    "esquece a última mensagem botei sem querer",
    "pra quê tanto não ta me deixando triste 😢",
    "Ei por favor pare está me machucando 😰",
    "o que eu te fiz me diz 😭",
    "essa é a última mensagem acabou minha criatividade",
];

var indiceMensagemAtual = 0;

function escreverMensagem() {
    var mensagem = mensagens[indiceMensagemAtual];
    var elementoMensagens = document.getElementById("mensagens");
    var novaMensagem = document.createElement("h3");
    novaMensagem.textContent = mensagem;
2
    novaMensagem.classList.add("texto2");
    novaMensagem.style.position = "absolute";
    novaMensagem.style.left = geraPosicao(10,85);
    novaMensagem.style.top = geraPosicao(10,85);

    elementoMensagens.appendChild(novaMensagem);
    indiceMensagemAtual = (indiceMensagemAtual + 1) % mensagens.length;
}