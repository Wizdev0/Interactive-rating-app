const rateButtons = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".sub-btn");
const selectedText = document.querySelector(".thanks-p");
const ratingState = document.querySelector(".first-card");
const thankYouState = document.querySelector(".second-card");

let selectedRating = null;

rateButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        rateButtons.forEach(b =>{
            b.classList.remove("active");
        });

        btn.classList.add("active");

        selectedRating = btn.innerText;
    });
});

submitBtn.addEventListener("click", () => {
   if(!selectedRating) {
    alert("Please choose the rating first");
    return;
    }


   selectedText.innerText = `You selected ${selectedRating} out of 5`;

   ratingState.classList.add("hidden");
   thankYouState.classList.remove("hidden");

});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("rate")) {
    rateButtons.forEach(btn => btn.classList.remove("active"));
    selectedRating = null;
  }
});