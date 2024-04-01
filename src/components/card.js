// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// Функция создания карточки
export function createCard(name, link, deleteCard, likeHandler, openCard) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const cardImage = card.querySelector(".card__image");
  //данные карточки
  cardImage.src = link;
  cardImage.alt = name;
  card.querySelector(".card__title").textContent = name;

  //лайк
  likeButton.addEventListener("click", likeHandler);

  //открытие картинки
  cardImage.addEventListener("click", function () {
    openCard(cardImage.src, name);
  });

  //колбэк удаления карточки 
  deleteButton.addEventListener("click", function () {
    deleteCard(card);
  });
  return card;
}

// Функция лайка
export function likeHandler(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

// Функция удаления карточки
export function deleteCard(cardElement) {
    cardElement.remove();
  }