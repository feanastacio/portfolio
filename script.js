const texts = ["Desenvolvedora Back-end", "Formada em Desenvolvimento de Sistemas", "Apaixonada por Código"];
let i = 0, j = 0, current = "", isDeleting = false;

function typing() {
    current = texts[i];
    if (!isDeleting) {
        document.getElementById("typing").textContent = current.slice(0, j++);
        if (j > current.length) { isDeleting = true; setTimeout(typing, 1500); return; }
    } else {
        document.getElementById("typing").textContent = current.slice(0, j--);
        if (j == 0) { isDeleting = false; i = (i + 1) % texts.length; }
    }
    setTimeout(typing, 80);
}
typing();

const reposContainer = document.getElementById("repos");
const projetos = [
    {
        nome: "Galeria Online",
        link: "https://github.com/feanastacio/GaleriaOnline",
        desc: "Interface moderna e responsiva para exibição de mídias."
    },
    {
        nome: "API Filmes",
        link: "https://github.com/feanastacio/API_Fillmes",
        desc: "Backend em C# para gerenciamento completo de catálogos cinematográficos."
    },
    {
        nome: "React Events",
        link: "https://github.com/feanastacio/ReactEvents",
        desc: "Sistema dinâmico para organização e visualização de eventos."
    }
];

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("repo");
    card.innerHTML = `
        <a href="${projeto.link}" target="_blank">
            <h3>${projeto.nome}</h3>
            <p>${projeto.desc}</p>
            <div style="color: #9333ea; margin-top: 15px; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Ver Projeto no GitHub</div>
        </a>
    `;
    reposContainer.appendChild(card);
});

tsParticles.load("particles", {
    background: { color: "transparent" },
    particles: {
        number: { value: 40 },
        color: { value: "#a855f7" },
        links: { enable: true, color: "#ff4fd8", opacity: 0.1 },
        move: { enable: true, speed: 0.8 },
        size: { value: 1.5 },
        opacity: { value: 0.3 }
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show") });
});
document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});