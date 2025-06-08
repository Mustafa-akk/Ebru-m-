

function checkDate() {
  const date = document.getElementById("dateInput").value;
  if (date === "2022-02-14") {
    document.querySelector(".entry-screen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Hmmm yanlış gibi... 🤭");
  }
}

function showLetter(text) {
  alert(text);
}

// Öpücük efekti ve konfeti
let moveCount = 0;
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("mouseover", () => {
  if (moveCount < 3) {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    surpriseBtn.style.position = "absolute";
    surpriseBtn.style.left = x + "%";
    surpriseBtn.style.top = y + "px";
    moveCount++;
  }
});

surpriseBtn.addEventListener("click", () => {
  if (moveCount >= 3) {
    document.getElementById("secretModal").classList.add("active");
    startConfetti();
    createKisses();
  }
});

function closeSecret() {
  document.getElementById("secretModal").classList.remove("active");
}

function createKisses() {
  const container = document.getElementById("kissesContainer");
  for (let i = 0; i < 20; i++) {
    const kiss = document.createElement("div");
    kiss.classList.add("kiss");
    kiss.textContent = "💋";
    kiss.style.left = Math.random() * 90 + "%";
    kiss.style.top = Math.random() * 90 + "%";
    container.appendChild(kiss);
  }
}

function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.classList.remove('hidden-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confettis.forEach(c => {
      c.y += 2;
      if (c.y > canvas.height) {
        c.y = 0;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
}
