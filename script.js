// POPUP
function openPreview(link) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("preview").src = link;
}

document.getElementById("close").onclick = function() {
  document.getElementById("popup").style.display = "none";
};

// ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// FORM
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message envoyé !");
});