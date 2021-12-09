// import logo from "../logo.svg";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isRemovePopupOpen, setIsRemovePopupOpen] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleRemoveClick(card) {
    setSelectedCard(card);
    setIsRemovePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsRemovePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="root">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onRemoveClick={handleRemoveClick}
        />

        <Footer />

        <PopupWithForm
          name="profile-img"
          title="Change profile image"
          buttonCaption="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="form__input form__input_type_profile-img"
            placeholder="Image link"
            type="url"
            id="avatar-image-url"
            name="avatar"
            required
          />
          <span
            id="avatar-image-url-error"
            className="form__error form__error_type_profile-img"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-place"
          title="New place"
          buttonCaption="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="form__input"
            placeholder="Title"
            type="text"
            id="image-title"
            name="name"
            required
            minLength="1"
            maxLength="30"
          />
          <span id="image-title-error" className="form__error"></span>
          <input
            className="form__input"
            placeholder="Image link"
            type="url"
            id="image-url"
            name="link"
            required
          />
          <span id="image-url-error" className="form__error"></span>
        </PopupWithForm>

        <PopupWithForm
          className="popup popup_type_edit-profile"
          name="edit-profile"
          title="Edit profile"
          buttonCaption="Save"
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
        >
          <input
            className="form__input"
            placeholder="Name"
            type="text"
            id="profile-name"
            name="name"
            maxLength="40"
            minLength="2"
            required
          />
          <span id="profile-name-error" className="form__error"></span>
          <input
            className="form__input"
            placeholder="About me"
            type="text"
            id="profile-about-me"
            name="about"
            maxLength="200"
            minLength="2"
            required
          />
          <span id="profile-about-me-error" className="form__error"></span>
        </PopupWithForm>
        <PopupWithForm
          className="popup popup_type_edit-profile"
          name="delete"
          title="Are you Sure?"
          buttonCaption="Yes"
          isOpen={isRemovePopupOpen}
          onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup
          name="display-image"
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        ></ImagePopup>
      </div>
    </div>
  );
}

export default App;
