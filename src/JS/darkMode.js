document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  document.body.setAttribute("theme", theme);
});