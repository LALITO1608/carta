const correctDate = "16/08/2025";

function checkDate() {
  const input = document.getElementById("dateInput").value.replace(/\s/g,'');
  const error = document.getElementById("errorMsg");

  if (input === correctDate) {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("card").classList.remove("hidden");
    document.getElementById("hearts").classList.remove("hidden");
    startHearts();
  } else {
    error.textContent = "Esa no es la fecha correcta 💭";
  }
}

// Corazones
const heartsContainer = document.getElementById("hearts");

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    heart.style.animationDuration = 6 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }, 500);
}
