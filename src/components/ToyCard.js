import React, { useState } from "react";

function ToyCard( {toy, url, onToyDelete, onToyLike} ) {

  const {image, likes, name, id} = toy

  function handleDeleteClick(){
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => onToyDelete(toy))
  }

  function handleLikesClick(e){
    const newLikes = likes + 1

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    })
    .then(res => res.json())
    .then(data => onToyLike(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikesClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
