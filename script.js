// TEXTO ESCREVENDO NO INICIO

window.addEventListener("load", function () {
  const ola = document.querySelector(".ola");
  const hygo = document.querySelector(".hygo");

  let texto1 = "Olá";
  let texto2 = "Meu nome é ";
  let nome = "Hygo";

  let i = 0;
  let j = 0;
  const typingSpeed = 100;
  const speedVariance = 40;
  const fullText = texto2 + nome;

  ola.innerHTML = "";
  hygo.innerHTML = "";

  function escreverOla() {
    if (i < texto1.length) {
      ola.innerHTML += texto1.charAt(i);
      i++;
      setTimeout(
        escreverOla,
        typingSpeed + Math.floor(Math.random() * speedVariance),
      );
    } else {
      ola.innerHTML += '<span style="color: #00fdd3;">!</span>';
      setTimeout(escreverNome, 150);
    }
  }

  function escreverNome() {
    if (j < fullText.length) {
      hygo.innerHTML += fullText.charAt(j);
      j++;
      setTimeout(
        escreverNome,
        typingSpeed + Math.floor(Math.random() * speedVariance),
      );
    } else {
      hygo.innerHTML =
        texto2 + '<span class="nome-destaque">' + nome + "</span>";
    }
  }

  escreverOla();
});

// ANIMAÇÂO DO BOTÃO CONTATO

function toggleContatos() {
  const contatos = document.querySelector(".footer-contatos");

  const vaiAbrir = !contatos.classList.contains("show");

  contatos.classList.toggle("show");

  if (vaiAbrir) {
    setTimeout(() => {
      const posicao = contatos.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: posicao - 180,
        behavior: "smooth",
      });
    }, 250);
  }
}

// SETA DE VOLTA AO TOPO

const btnTopo = document.getElementById("btn-topo");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const alturaTela = window.innerHeight;

  if (footerTop < alturaTela - 100) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ANIMAÇÂO DE REVEAL

const observerOptions = {
  threshold: 0.30,
  rootMargin: "0px 0px -50px 0px",
};

const revealCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    } else {
      entry.target.classList.remove("is-visible");
    }
  });
};

const revealObserver = new IntersectionObserver(
  revealCallback,
  observerOptions,
);

function initRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

document.addEventListener("DOMContentLoaded", initRevealAnimation);
