// Botão WhatsApp flutuante
const numeroWhatsApp = "244947216301";
const mensagem = "Olá, vim pelo site da Chacale Produções!";

const botao = document.getElementById("whatsappBtn");

if (botao) {
  botao.addEventListener("click", function () {
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
}

// Animar cards de serviços ao aparecer
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
const elementos = document.querySelectorAll('.revelar');

function revelarAoRolar() {
    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < alturaTela) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', revelarAoRolar);
revelarAoRolar();
function enviarWhats(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem').value;

    const texto = `Olá, meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${msg}`;
    const numero = "244947216301"; // teu WhatsApp

    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("ativo");
}
const membros = document.querySelectorAll('.membro');

window.addEventListener('scroll', () => {
    membros.forEach(membro => {
        const top = membro.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            membro.classList.add('active');
        }
    });
});
