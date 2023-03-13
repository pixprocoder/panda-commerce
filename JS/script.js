// adding border to bag cards
const bagCard = document.getElementsByClassName("bag-card");
for (const bag of bagCard) {
  bag.addEventListener("click", function () {
    bag.classList.remove("border-0");
    bag.classList.add("border-5");
  });
}

// db click to change bg
document.getElementById("subscribe").addEventListener("dblclick", function () {
  this.classList.add("bg-info");
});

// disabled btn script
document
  .getElementById("footer-email-input")
  .addEventListener("keyup", function (e) {
    const submitButton = document.getElementById("submit-btn");
    if (e.target.value === "email") {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", true);
    }
  });
