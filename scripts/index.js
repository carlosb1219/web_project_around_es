const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_braies.jpg",
  },
];

const cardElementTemplate = document
  .querySelector("#card-element")
  .content.querySelector(".card");
const cardsContainer = document.querySelector(".cards__list");
const editProfileBtn = document.querySelector(".profile__edit-button");
const profilePopupCloseBtn = document.querySelector(".popup__close");
const profilePopup = document.querySelector("#edit-popup");
const inputName = profilePopup.querySelector(".popup__input_type_name");
const inputDescription = profilePopup.querySelector(
  ".popup__input_type_description",
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addCardBtn = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const newCardForm = document.querySelector("#new-card-form");
const newCardCloseBtn = newCardPopup.querySelector(".popup__close");
const addCardSubmitBtn = newCardForm.querySelector(".popup__submit-button");
const imagePopupCloseBtn = document.querySelector("#image-popup .popup__close");
const imagePopup = document.querySelector("#image-popup");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

function handleOpenEditModal(modal) {
  openModal(modal);
  fillProfileForm();
}

editProfileBtn.addEventListener("click", () =>
  handleOpenEditModal(profilePopup),
);

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

profilePopupCloseBtn.addEventListener("click", () => closeModal(profilePopup));

let formElement = profilePopup.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = profilePopup.querySelector(".popup__input_type_name");
  let jobInput = profilePopup.querySelector(".popup__input_type_description");

  let nameValue = nameInput.value;
  let descriptionValue = jobInput.value;

  profileName.textContent = nameValue;
  profileDescription.textContent = descriptionValue;

  closeModal(profilePopup);
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement({
  name = "Sin título",
  link = "./images/placeholder.jpg",
}) {
  const cardElement = cardElementTemplate.cloneNode(true);
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = name;

  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_is-active");
  });

  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImage.addEventListener("click", function () {
    imagePopupImage.src = link;
    imagePopupCaption.textContent = name;

    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(datos) {
  const cardElement = getCardElement(datos);
  cardsContainer.prepend(cardElement);
}

initialCards.forEach(function (card) {
  renderCard(card);
});

addCardBtn.addEventListener("click", () => openModal(newCardPopup));
newCardCloseBtn.addEventListener("click", () => closeModal(newCardPopup));
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = newCardForm.querySelector(".popup__input_type_card-name");
  const linkInput = newCardForm.querySelector(".popup__input_type_url");

  const cardData = {
    name: nameInput.value,
    link: linkInput.value,
  };

  renderCard(cardData);
  newCardForm.reset();
  closeModal(newCardPopup);
}
newCardForm.addEventListener("submit", handleNewCardFormSubmit);
imagePopupCloseBtn.addEventListener("click", () => {
  closeModal(imagePopup);
});
