// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
// ================================
// DNA STRANDS GENERATOR
// ================================
const dna = document.createElement("div");
dna.className = "dna-container";
document.body.appendChild(dna);

for (let i = 0; i < 24; i++) {
  const strand = document.createElement("div");
  strand.className = "dna-strand";
  strand.style.left = `${(i / 24) * 100}%`;
  strand.style.animationDelay = `${i * 0.15}s`;
  strand.style.height = `${60 + Math.random() * 40}vh`;
  dna.appendChild(strand);
}

// ================================
// BRAIN HOLOGRAM GENERATOR
// ================================
const brain = document.createElement("div");
brain.className = "brain-hologram";
document.body.appendChild(brain);