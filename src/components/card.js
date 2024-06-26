import { deleteOwnCard, putLike, deleteLike } from "./api.js";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(
  cardTemplate,
  data,
  deleteCard,
  likeHandler,
  openCard,
  userId
) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = card.querySelector(".card__delete-button");
  const likeButton = card.querySelector(".card__like-button");
  const cardImage = card.querySelector(".card__image");
  const likeCount = card.querySelector(".card__like-number");
  //данные карточки
  const dataCardID = data._id;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  card.querySelector(".card__title").textContent = data.name;

  if (data.owner._id === userId) {
    deleteButton.addEventListener("click", (evt) =>
      deleteCard(evt, dataCardID)
    );
  } else {
    deleteButton.style.display = "none";
  }

  const isLiked = data.likes.some((element) => {
    return element._id === userId;
  });

  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeCount.textContent = data.likes.length;

  likeButton.addEventListener("click", (evt) => {
    likeHandler(evt, dataCardID, likeCount);
  });

  cardImage.addEventListener("click", () => {
    openCard(data.name, data.link);
  });

  return card;
}

// Функция лайка
function likeHandler(evt, id, likesCountElement) {
  const target = evt.target;
  const isActive = target.classList.contains("card__like-button_is-active");
  const toggleLikeRequest = () => (isActive ? deleteLike : putLike)(id);
  toggleLikeRequest()
    .then((data) => {
      target.classList.toggle("card__like-button_is-active");
      likesCountElement.textContent = data.likes.length;
    })
    .catch((error) => {
      console.error("Ошибка при обработке лайка:", error);
    });
}

// Функция удаления карточки
function deleteCard(evt, id) {
  Promise.all([deleteOwnCard(id)])
    .then(() => {
      evt.target.closest(".places__item").remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

export { cardTemplate, createCard, deleteCard, likeHandler };
