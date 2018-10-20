var key = {
  burgerMenu: document.querySelector('.header-mainHeader-mobile-top-burgerMenu'),
  modal: document.querySelector('.header-modal'),
  cross: document.querySelector('.header-modalContent__cross'),
};

key.burgerMenu.addEventListener('click', function() {
  key.modal.classList.add("flipInX");
  key.modal.style.display = "block";
  setTimeout(function() {
    key.modal.classList.remove("flipX");
  }, 750);
})

key.cross.addEventListener('click', function() {
  key.modal.classList.add("flipOutX");
  setTimeout(function() {
    key.modal.style.display = "none";
    key.modal.classList.remove("flipOutX");
  }, 750);
})
