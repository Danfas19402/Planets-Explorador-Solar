const planet = document.getElementById("planet");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");

const dados = {
  mercury: {
    nome: "Mercúrio",
    descricao: "O planeta mais próximo do Sol."
  },
  venus: {
    nome: "Vênus",
    descricao: "O planeta mais quente do sistema solar."
  },
  earth: {
    nome: "Terra",
    descricao: "Nosso lar, cheio de vida."
  },
  mars: {
    nome: "Marte",
    descricao: "Conhecido como o planeta vermelho."
  },
  jupiter: {
    nome: "Júpiter",
    descricao: "O maior planeta do sistema solar."
  },
  saturn: {
    nome: "Saturno",
    descricao: "Famoso por seus anéis."
  },
  uranus: {
    nome: "Urano",
    descricao: "Possui inclinação única."
  },
  neptune: {
    nome: "Netuno",
    descricao: "Planeta azul com ventos intensos."
  }
};

document.querySelectorAll(".menu button").forEach(botao => {
  botao.addEventListener("click", () => {
    const id = botao.dataset.planeta;

    planet.className = "planet " + id;
    nome.textContent = dados[id].nome;
    descricao.textContent = dados[id].descricao;
  });
});

