// AOS Init
AOS.init();

// Typed.js Text
new Typed("#typed", {
  strings: ["Akshay Pratap Singh", "AI/ML", "Web Developer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

// Optional: Save theme to localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Modal
function openModal(title) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Easter Egg
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "e") {
    alert("🎉 You found the hidden Easter Egg!");
  }
});
