naruto1.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

naruto1.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

onepiece1.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

onepiece1.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

deathnote1.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

deathnote1.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

classoftheelite.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

classoftheelite.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

vagabond.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

vagabond.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

bokunohero.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
};

bokunohero.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
};

berserk.onmouseover = function () {
  this.style.width = "195px";
  this.style.height = "315px";
  this.style.transition = "0.2s";
  this.style.border = "1px solid brown";
}

berserk.onmouseout = function () {
  this.style.width = "180px";
  this.style.height = "300px";
  this.style.transition = "0.2s";
  this.style.border = "none";
}

var icon = document.getElementById("moonIcon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    icon.src = "assets/dark theme icon/sun.png"
  }else icon.src = "assets/dark theme icon/moon.png"
}