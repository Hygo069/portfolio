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
        typingSpeed + Math.floor(Math.random() * speedVariance)
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
        typingSpeed + Math.floor(Math.random() * speedVariance)
      );
    } else {
      hygo.innerHTML =
        texto2 + '<span class="nome-destaque">' + nome + "</span>";
    }
  }

  escreverOla();
});

// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Fechar menu ao fazer scroll
window.addEventListener("scroll", () => {
  if (mobileMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// ANIMAÇÃO DO BOTÃO CONTATO

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

// ANIMAÇÃO DE REVEAL

const observerOptions = {
  threshold: 0.3,
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
  observerOptions
);

function initRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

// Chamar mesmo se DOMContentLoaded já passou
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRevealAnimation);
} else {
  initRevealAnimation();
}

// EFEITO DE BRILHO NOS PROJETOS

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card-projeto").forEach((card) => {
    const shine = document.createElement("div");
    shine.className = "shine";
    card.appendChild(shine);
  });
});