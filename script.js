// Modal functionality
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("projectImg");
const btn = document.querySelector(".view-project-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  modalImg.src = "projects.png";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
