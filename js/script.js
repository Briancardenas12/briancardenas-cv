// ======= CAMBIO DE TEMA CLARO / OSCURO =======
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Verificar si el usuario ya tiene una preferencia guardada
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

// Evento de cambio de tema
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
