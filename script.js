// ===== Sparks BG =====
const sparksWrap = document.getElementById("sparks");
const SPARKS = 14;

for (let i = 0; i < SPARKS; i++) {
  const s = document.createElement("div");
  s.className = "spark";
  const top = Math.random() * 100;
  const rot = (Math.random() * 44) - 22; // -22..22
  const dur = (6 + Math.random() * 8).toFixed(2) + "s";
  const delay = (Math.random() * 6).toFixed(2) + "s";

  s.style.top = top + "%";
  s.style.setProperty("--r", rot + "deg");
  s.style.setProperty("--d", dur);
  s.style.animationDelay = delay;

  sparksWrap.appendChild(s);
}

// ===== Smooth Marquee (duplicate track items) =====
const marquees = document.querySelectorAll(".marquee");

marquees.forEach((marquee) => {
  const track = marquee.querySelector(".track");
  const speed = Number(marquee.dataset.speed || 24);

  // Duplicate children once for seamless loop
  const children = Array.from(track.children);
  children.forEach((node) => track.appendChild(node.cloneNode(true)));

  let x = 0;
  let last = performance.now();

  function tick(now) {
    const dt = (now - last) / 1000;
    last = now;

    x -= speed * dt; // px per second

    // when moved half (original width), reset
    const half = track.scrollWidth / 2;
    if (Math.abs(x) >= half) x = 0;

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
