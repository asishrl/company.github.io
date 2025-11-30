body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0d1117;
  color: #e6edf3;
}

header {
  background: #161b22;
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #30363d;
}

header h1 { margin: 0; font-size: 2.3rem; }
.tagline { margin-top: 5px; color: #8b949e; }

nav {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 15px;
}

nav a {
  color: #58a6ff;
  text-decoration: none;
  font-weight: bold;
}

.hero {
  padding: 70px 20px;
  text-align: center;
}

.section {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 10px;
}

h3 { color: #58a6ff; }

footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #30363d;
  margin-top: 40px;
  color: #8b949e;
}

/* Fade-in Animation */
.fade-in {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.apply-note {
  margin-top: 20px;
  font-style: italic;
  color: #58a6ff;
}
