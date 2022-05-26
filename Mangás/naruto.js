var icon = document.getElementById("moonIcon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "assets/dark theme icon/sun.png";
  } else icon.src = "assets/dark theme icon/moon.png";
};
