var elBtn = document.querySelector(".burger");
var elNav = document.querySelector(".nav");

elBtn.addEventListener("click", function () {
  elNav.style.display = "block";
  if (elNav.style.display == "block") {
    elNav.style.display == " none ";
  } else {
    elNav.style.display == "block";
  }
});
