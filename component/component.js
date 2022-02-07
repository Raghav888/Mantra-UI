//Modal component
const btnOpenModal = document.querySelector(".mantra-open-model");
const btnCloseModal = document.querySelector("#mantra-modal-close");
const cancelBtn = document.querySelector(".mantra-modal-cancel");
const modalBackground = document.querySelector(".mantra-modal-background");

btnOpenModal.addEventListener("click", () => {
    modalBackground.classList.add("mantra-open-modal");
});
cancelBtn.addEventListener("click", () => {
    modalBackground.classList.remove("mantra-open-modal");
});
btnCloseModal.addEventListener("click", () => {
    modalBackground.classList.remove("mantra-open-modal");
});