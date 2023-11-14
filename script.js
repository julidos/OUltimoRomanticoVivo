function desvia(t) {
  const btn2 = t;
  btn2.style.position = 'absolute';
  btn2.style.bottom = geraPosicao(10, 90);
  btn2.style.left = geraPosicao(20, 80);
  escreverMensagem();
}
  
  function geraPosicao(min, max) {

    return Math.random() * (max - min) + min + "%";
  }
  
  const audio = new Audio("./imagens/musica.mp3");
  const audio2 = new Audio("./imagens/musica2.mp3");
  

  function mostrarConteudo() {
    const conteudo = document.getElementById("conteudo");
    const img = document.getElementById("img");
    const conteudo2 = document.getElementById("conteudo2");
    const imagemFundo = document.getElementById("imagemFundo")
    imagemFundo.style.display = "flex";
    conteudo.style.display = "flex";
    img.style.display = "flex";
    conteudo2.style.display = "none";
  }
  
  function executarFuncoes() {
    audio.play();
    mostrarConteudo();
    const som = document.getElementById("som");
    som.style.display = "none";
  }
  
function acabouMensagens() {
  const mensagens = document.getElementById("mensagens");
  const titulo1 = document.getElementById("titulo1");
  const img12 = document.getElementById("img12");
  const img = document.getElementById("img");
  let titulo2 = document.querySelector(".titulo2");
  let btn2 = document.querySelector('.btn2');
  const imagemFundo = document.getElementById("imagemFundo")
  const imagemFundo2 = document.getElementById("imagemFundo2")
  imagemFundo2.style.display = "flex";
  imagemFundo.style.display = "none";
  img.style.display = "none";
  img12.style.display = "flex";
  titulo2.style.display = "flex";
  btn2.style.display = "none";
  titulo1.style.display = "none";
  mensagens.style.display = "none";
  audio2.play();
  audio.pause();
}

  function mostrarConteudo2() {
    const conteudo2 = document.getElementById("conteudo2");
    const img = document.getElementById("img");
    const img12 = document.getElementById("img12");
    const conteudo = document.getElementById("conteudo");
    const mensagens = document.getElementById("mensagens");
    const imagemFundo = document.getElementById("imagemFundo");
    const imagemFundo2 = document.getElementById("imagemFundo2");
  
    audio.play();
    audio2.pause();
    conteudo2.style.display = "flex";
    imagemFundo.style.display = "flex";
    imagemFundo2.style.display = "none";
    img.style.display = "none";
    img12.style.display = "none";
    conteudo.style.display = "none";
    mensagens.style.display = "none";
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
    "esquece a última mensagem botei sem querer",
    "tenho tdah",
    "o que a gente tava falando mesmo",
    "passei 3 dias fazendo isso por favor",
    "aprendi javascript só pra fazer isso é sério",
    "pra quê tanto não ta me deixando triste 😢",
    "Ei por favor pare está me machucando 😰",
    "o que eu te fiz me diz 😭",
    "estou de joelhos implorando neste instante",
    "é sério vc só n ta vendo",
    "sei dirigir de forma duvidosa",
    "sou engraçadinho faço piada vc ri",
    "te divirto(opcional",
    "essa é a última mensagem acabou minha criatividade",
    "eu menti, aceita logo",
    "não vou desistir sou brasilieiro",
    "brasileiros não desistem nunca",
    "tenho 3 graus de miopia",
    "adoro natação",
    "tenho medo de altura",
    "já quebrei o braço",
    "ja comi carne de lhama",
    "sei lá caralho não sei mais o que to falando",
    "ACEITA POR FAVOR ESSA É A ÚLTIMA MENSAGEM",
    "TA BOM EU MENTI É ESSA NA VERDADE",
    "TE ENGANEI É ESSA PARA DE TENTAR APERTAR NÃO",
    "PARA COM ISSO POR FAOVR EU TO CHORANDO",
    "TEM CRIANÇA DE COLO CORRENDO CEGO VENDO SURDO OUVINDO",
    "ACEITAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
];

let indiceMensagemAtual = 0;
let contador = 0;

function escreverMensagem() {
  contador++;
  const mensagem = mensagens[indiceMensagemAtual];
  const elementoMensagens = document.getElementById("mensagens");
  const novaMensagem = document.createElement("h3");
  novaMensagem.textContent = mensagem;
  novaMensagem.classList.add("texto2");
  novaMensagem.style.position = "absolute";

  let left, top;
  let tentativas = 0;
  const maxTentativas = 20;
  let sobreposicao = false;

  do {
      left = geraPosicao(10, 85);
      top = geraPosicao(10, 85);
      novaMensagem.style.left = left;
      novaMensagem.style.top = top;

      sobreposicao = false;

      const mensagensExistentes = elementoMensagens.querySelectorAll("h3");
      for (let i = 0; i < mensagensExistentes.length; i++) {
          const mensagemExistente = mensagensExistentes[i];
          const mensagemExistenteRect = mensagemExistente.getBoundingClientRect();
          const novaMensagemRect = novaMensagem.getBoundingClientRect();

          if (
              novaMensagemRect.left < mensagemExistenteRect.right &&
              novaMensagemRect.right > mensagemExistenteRect.left &&
              novaMensagemRect.top < mensagemExistenteRect.bottom &&
              novaMensagemRect.bottom > mensagemExistenteRect.top
          ) {
              sobreposicao = true;
              break;
          }
      }

      tentativas++;
  } while (sobreposicao && tentativas < maxTentativas);

  if (!sobreposicao) {
      novaMensagem.style.left = left + "px";
      novaMensagem.style.top = top + "px";
      elementoMensagens.appendChild(novaMensagem);
      indiceMensagemAtual = (indiceMensagemAtual + 1) % mensagens.length;
 }
 if (contador > mensagens.length) {
  acabouMensagens();
 }
}


function voltar() {
  window.history.back();
}