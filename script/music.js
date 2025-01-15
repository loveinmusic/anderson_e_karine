// script.js
const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const volumeControl = document.getElementById("volumeControl");

// Criar um contexto de áudio e um nó de ganho
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const track = audioContext.createMediaElementSource(audioPlayer);
const gainNode = audioContext.createGain();
track.connect(gainNode).connect(audioContext.destination);

// Atualizar o volume com base no controle
volumeControl.addEventListener("input", (e) => {
  const volume = parseFloat(e.target.value);
  gainNode.gain.value = volume; // Controlar o volume usando o ganho
});

// Play/pause com ativação do contexto de áudio
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioContext.resume(); // Necessário para ativar o contexto em iOS
    audioPlayer.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    audioPlayer.pause();
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
  }
});

// Configuração inicial
window.addEventListener("load", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
  gainNode.gain.value = volumeControl.value; // Sincronizar controle de volume
});
