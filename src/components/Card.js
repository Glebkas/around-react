import React from "react";

function Card(props) {
  const cardImage = props.card.link;
  const cardName = props.card.name;
  const likes = props.card.likes;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleRemoveClick(){
    props.onRemoveClick(props.card)
  }

  return (
    <li className="cards__list-item">
      <div className="card">
        <button  onClick={handleRemoveClick} className="card__remove-button" type="button"></button>
        <img
          className="card__image"
          onClick={handleClick}
          alt={cardName}
          src={cardImage}
        />
        <div className="card__description">
          <h2 className="card__title">{cardName}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like-button"></button>
            <p className="card__like-counter">{likes.length}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
