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

initialCards.forEach(function (card) {
  console.log(card.name);
});

const editProfileBtn = document.querySelector(".profile__edit-button");
const profilePopupCloseBtn = document.querySelector(".popup__close");
const profilePopup = document.querySelector("#edit-popup");
const inputName = profilePopup.querySelector(".popup__input_type_name");
const inputDescription = profilePopup.querySelector(
  ".popup__input_type_description",
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

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
