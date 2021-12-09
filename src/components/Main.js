import React from "react";
import api from "../utils/api";

import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Jacques Cousteau");
  const [userDescription, setUserDescription] = React.useState("Explorer");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })

      .catch((err) => console.error(`error: ${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__img-container">
            <img
              id="profileImg"
              className="profile__img"
              alt="travaler profile"
              src={userAvatar}
            />
            <button
              type="button"
              className="profile__img-edit-button"
              onClick={props.onEditAvatarClick}
            ></button>
          </div>
          <div className="profile__details">
            <div className="profile__details-top">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onEditProfileClick}
              ></button>
            </div>
            <p className="profile__title">{userDescription}</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list"></ul>
      </section>
      <section className="cards">
        <div className="cards__list">
          {cards.reverse().map((card) => (
            <Card
              key={card["_id"]}
              card={card}
              onCardClick={props.onCardClick}
              onRemoveClick={props.onRemoveClick}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
