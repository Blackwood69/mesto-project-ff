import '../pages/index.css';
import {initialCards} from "../scripts/cards"


const plasesList = document.querySelector('.places__list');

// Функция создания карточки
function createCard(cardName, cardLink, deleteCard) {
  // Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

  // DOM узлы
  cardItem.querySelector('.card__title').textContent = cardName;
  cardItem.querySelector('.card__image').src = cardLink;
  cardItem.querySelector('.card__image').alt = cardName; // добавлен атрибут alt

  const deleteButton = cardItem.querySelector('.card__delete-button');  
  deleteButton.addEventListener('click', () => deleteCard(cardItem)); 

  return cardItem;
}

// Функция удаления карточки
function deleteCard(cardItem) {
  cardItem.remove();
}

// Вывести карточки на страницу
initialCards.forEach(function(card) {
  const cardItem = createCard(card.name, card.link, deleteCard); // передача функции удаления в createCard
  plasesList.append(cardItem); 
}); 