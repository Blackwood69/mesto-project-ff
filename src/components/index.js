// index.js
import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeHandler } from "./card.js";
import { openModal, closeModal } from "./modal.js";

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
//добавление карточки
const formNewPlace = document.forms["new-place"];
const placeNameInput = formNewPlace.elements["place-name"];
const linkInput = formNewPlace.elements.link;
//Попап карточки
const imagePopup = document.querySelector(".popup_type_image");
const imageInPopup = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");
//Закрытие попапов
const closeButtons = document.querySelectorAll(".popup__close");

// Вывести карточки на страницу
initialCards.forEach((item) => {
  cardsContainer.append(createCard(item.name, item.link, deleteCard, likeHandler, openCard, item.name));
});

// Функция submit отображения имени в форме
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  const name = nameInput.value;
  const description = descriptionInput.value;
  profileTitle.textContent = name;
  profileDescription.textContent = description;
  closeModal(editPopup);
}

// Функция submit формы добавления карточки
function handleNewPlaceSubmit(evt) {
  evt.preventDefault();
  const name = placeNameInput.value;
  const link = linkInput.value;
  const newCard = createCard(name, link, deleteCard, likeHandler, openCard, name);
  cardsContainer.prepend(newCard);
  closeModal(addPopup);
  formNewPlace.reset();
}

// Функция открытия попапа профиля
function openEditProfilePopup() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openModal(editPopup);
}

// Функция открытия попапа карточки
function openCard(imageSrc, cardName) {
  openModal(imagePopup);
  imageInPopup.src = imageSrc;
  imageInPopup.alt = cardName;
  imagePopupCaption.textContent = cardName;
}

// Обработчики
formEditProfile.addEventListener("submit", handleEditProfileSubmit);
formNewPlace.addEventListener("submit", handleNewPlaceSubmit);
buttonOpenEditProfile.addEventListener("click", openEditProfilePopup);
buttonOpenAddCard.addEventListener("click", () => {
  openModal(addPopup);
});

// закрытие по клику на крестик
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closeModal(popup);
  });
});