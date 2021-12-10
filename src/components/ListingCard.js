import { React, useState } from "react";

function ListingCard({ id, description, image, location, handleDelete }) {

  const [isFavorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite(!isFavorite)
  };

  function handleRemoveClick(event) {
    handleDelete(event.target.id)
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} className="emoji-button delete" onClick={handleRemoveClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
