  function openMenu() {
    document.getElementById("sidebarMenu").style.width = "200px";
    document.getElementById("menuIcon").classList.add("hide");
  }

  function closeMenu() {
    document.getElementById("sidebarMenu").style.width = "0";
    document.getElementById("menuIcon").classList.remove("hide");
  }
  
  const toggleSwitch = document.getElementById("theme-toggle");

toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On load: apply saved theme
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
