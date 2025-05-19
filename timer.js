const params = new URLSearchParams(window.location.search);
const label = params.get("label") || "공부";
const start = parseInt(params.get("start")) || Math.floor(Date.now() / 1000);

document.getElementById("label").textContent = label;

function updateTimer() {
  const now = Math.floor(Date.now() / 1000);
  const elapsed = now - start;
  const h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  document.getElementById("timer").textContent = `${h}:${m}:${s}`;
}

setInterval(updateTimer, 1000);
