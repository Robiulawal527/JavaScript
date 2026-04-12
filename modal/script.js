const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// Close when clicking outside modal
modalOverlay.addEventListener("click", function(e) {
  if(e.target === modalOverlay) {
    modalOverlay.classList.remove("open-modal");
  }
});
