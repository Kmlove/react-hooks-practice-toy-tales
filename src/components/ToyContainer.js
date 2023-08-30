import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {

  const toyCardArray = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} />
  })

  return (
    <div id="toy-collection">{toyCardArray}</div>
  );
}

export default ToyContainer;
