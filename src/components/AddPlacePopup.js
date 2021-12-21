import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [values, setValues] = React.useState({ name: "", link: "" });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlaceSubmit(values).then(() => {
      setValues({ name: "", link: "" });
    });
  }

  return (
    <PopupWithForm
      name="add-place"
      title="New place"
      buttonCaption="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        onChange={handleChange}
        value={values.name || ""}
      />
      <span id="image-title-error" className="form__error"></span>
      <input
        className="form__input"
        placeholder="Image link"
        type="url"
        id="image-url"
        name="link"
        onChange={handleChange}
        value={values.link || ""}
        required
      />
      <span id="image-url-error" className="form__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
