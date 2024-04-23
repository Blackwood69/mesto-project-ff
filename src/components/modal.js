// Плавное открытие
function openModal(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeModalEsc);
    popup.addEventListener("mousedown", closeModalOverlay);
  }
  
  // Плавное закрытие 
function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeModalEsc);
    popup.removeEventListener("mousedown", closeModalOverlay);
  }
  
  
  //Функция закрытия нажатием оверлей
  function closeModalOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeModal(evt.currentTarget);
    }
  }


  //Функция закрытия нажатием на Esc
  function closeModalEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  }

  export { openModal, closeModal};