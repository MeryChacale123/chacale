// WhatsApp
const numero = "244947216301";
const mensagem = "Olá, vim pelo site da Chacale Produções.";

document.getElementById("whatsappFloat").onclick = () => {
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
};

// Animação ao rolar
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("active");
        }
    });
});
const toggle = document.getElementById("toggleTheme");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
};
