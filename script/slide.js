// script.js
const slides = document.querySelectorAll(".slide");
const hearts = document.querySelectorAll(".heart");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Atualiza os corações na barra de progresso
  hearts.forEach((heart, i) => {
    heart.textContent = i === index ? "❤️" : "🤍";
  });

  currentIndex = index;
}

// Função para ir ao próximo slide
function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

// Função para ir ao slide anterior
function prevSlide() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// Adiciona eventos aos corações
hearts.forEach((heart, i) => {
  heart.addEventListener("click", () => showSlide(i));
});

// Troca automática de slides a cada 5 segundos
setInterval(nextSlide, 5000);

// Exibe o primeiro slide ao carregar
showSlide(currentIndex);

