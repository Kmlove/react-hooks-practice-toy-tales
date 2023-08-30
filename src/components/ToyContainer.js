import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, url, onToyDelete, onToyLike}) {

  const toyCardArray = toys.map(toy => {
    return (
      <ToyCard 
        key={toy.id} 
        toy={toy} 
        url={url} 
        onToyDelete={onToyDelete} 
        onToyLike={onToyLike}
      />
    )
  })

  return (
    <div id="toy-collection">{toyCardArray}</div>
  );
}

export default ToyContainer;
