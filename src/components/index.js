// index.js
import "../pages/index.css";
import { cardTemplate, createCard, deleteCard, likeHandler } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import { getUserInfo, getCard, patchUserInfo, patchAvatar, postNewCard,} from "./api.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// DOM узлы
const cardsContainer = document.querySelector(".places__list");
const buttonOpenEditProfile = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const buttonOpenAddCard = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_type_new-card");
//редактирование профиля
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const descriptionInput = formEditProfile.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileFormSubmitButton = formEditProfile.querySelector(".popup__button");
//добавление карточки
const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.elements["place-name"];
const linkInput = formNewPlace.elements.link;
const cardFormSubmitButton = formNewPlace.querySelector(".popup__button");
//Попап карточки
const imagePopup = document.querySelector(".popup_type_image");
const imageInPopup = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");
//редактирование аватара
const popupAvatarEdit = document.querySelector(".popup_type_avatar");
const avatar = document.querySelector(".profile__image");
const formAvatar = document.forms["new-avatar"];
const avatarLinkInput = formAvatar.elements.link;
const avatarFormSubmitButton = formAvatar.querySelector(".popup__button");
const popupAvatarEditOpen = document.querySelector(".profile__image_cover");

//Закрытие попапов
const closeButtons = document.querySelectorAll(".popup__close");

// Функция submit отображения имени в форме
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  setLoadingButtonText(true, profileFormSubmitButton);
  patchUserInfo(nameInput.value, descriptionInput.value)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(editPopup);
    })
    .catch((error) => {
      console.log(`Error in edit profile! Status: ${error}`);
    })
    .finally(() => {
      setLoadingButtonText(false, profileFormSubmitButton);
    });
}

// Функция submit формы добавления карточки
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  setLoadingButtonText(true, cardFormSubmitButton);
  const name = placeNameInput.value;
  const link = linkInput.value;
  postNewCard(name, link)
    .then((element) => {
      const newCard = createCard(
        cardTemplate,
        element,
        deleteCard,
        likeHandler,
        openImagePopup,
        userId
      );
      cardsContainer.prepend(newCard);
      clearValidation(formNewPlace, validationConfig);
      closeModal(addPopup);
      formNewPlace.reset();
    })
    .catch((error) => {
      console.log(`Error in new place! Status: ${error}`);
    })
    .finally(() => {
      setLoadingButtonText(false, cardFormSubmitButton);
    });
}

// Функция submit изменения аватара
const handleFormEditAvatarSubmit = (evt) => {
  evt.preventDefault();
  setLoadingButtonText(true, avatarFormSubmitButton);
  patchAvatar(avatarLinkInput.value)
    .then((res) => {
      avatar.style.backgroundImage = `url('${res.avatar}')`;
      closeModal(popupAvatarEdit);
    })
    .catch((error) => {
      console.log(`Error in edit avatar! Status: ${error}`);
    })
    .finally(() => {
      setLoadingButtonText(false, avatarFormSubmitButton);
    });
};

// Функция открытия попапа профиля
function openEditProfilePopup() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  clearValidation(formEditProfile, validationConfig);
  openModal(editPopup);
}

// Функция открытия попапа карточки
function openImagePopup(cardName, imageSrc) {
  openModal(imagePopup);
  imageInPopup.src = imageSrc;
  imageInPopup.alt = cardName;
  imagePopupCaption.textContent = cardName;
}

//Ожидание от сервера
function setLoadingButtonText(isLoading, button) {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
}

//загрузка с сервера
let userId;
Promise.all([getCard(), getUserInfo()])
  .then(([listCard, userData]) => {
    profileDescription.textContent = userData.about;
    profileTitle.textContent = userData.name;
    avatar.style.backgroundImage = `url('${userData.avatar}')`;
    userId = userData._id;
    listCard.forEach((cardData) => {
      cardsContainer.append(
        createCard(
          cardTemplate,
          cardData,
          deleteCard,
          likeHandler,
          openImagePopup,
          userId
        )
      );
    });
  })
  .catch((error) => {
    console.error(`Error in server! Status: ${error}`);
  });

// Обработчики
formEditProfile.addEventListener("submit", handleEditProfileSubmit);
formNewPlace.addEventListener("submit", handleNewPlaceSubmit);
formAvatar.addEventListener("submit", handleFormEditAvatarSubmit);
buttonOpenEditProfile.addEventListener("click", () => {
  clearValidation(formEditProfile, validationConfig);
  openEditProfilePopup();
});
buttonOpenAddCard.addEventListener("click", () => {
  openModal(addPopup);
});

popupAvatarEditOpen.addEventListener("click", () => {
  clearValidation(formEditProfile, validationConfig);
  openModal(popupAvatarEdit);
  formAvatar.reset();
});

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

// закрытие по клику на крестик
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closeModal(popup);
  });
});

enableValidation(validationConfig);
