// Inicia partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "star" },
    opacity: { value: 0.6 },
    size: { value: 4 },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// Reproduz a música se bloqueada, e recupera o tempo de reprodução
document.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
});

// Recupera o tempo de reprodução da música do LocalStorage
const savedTime = localStorage.getItem("musicTime");
if (savedTime) {
  const music = document.getElementById("bg-music");
  music.currentTime = savedTime;  // Define o tempo de reprodução de onde parou
}

// Salva o tempo de reprodução no LocalStorage a cada segundo
document.getElementById("bg-music").addEventListener('timeupdate', () => {
  const music = document.getElementById("bg-music");
  localStorage.setItem("musicTime", music.currentTime);
});
