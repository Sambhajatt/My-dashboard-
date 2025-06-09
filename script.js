const statusBtn = document.getElementById("statusBtn");
const statusModal = document.getElementById("statusModal");
const closeModal = document.getElementById("closeModal");

statusBtn.addEventListener("click", () => {
  statusModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  statusModal.style.display = "none";
});

// Optional: close modal if clicking outside
statusModal.addEventListener("click", (e) => {
  if (e.target === statusModal) {
    statusModal.style.display = "none";
  }
});
