function myFunction() {
  let toggleModal = document.getElementById("myId");
  toggleModal.classList.toggle("is-hidden");
}

// function myFunctionMenu() {
let toggleMenu = document.getElementById("myIdMenu");
toggleMenu.addEventListener('click', function () {
  toggleMenu.classList.toggle("is-open");
})
  // toggleMenu.classList.toggle("is-open");
// }