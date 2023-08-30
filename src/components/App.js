import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const url = "http://localhost:3001/toys"
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToyFormSubmit(newToy){
    setToys([...toys, newToy])
  }

  function onToyDelete(deletedToy){
    const updatedToys = toys.filter(toy => {
      return toy.id !== deletedToy.id
    })

    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm url={url} onNewToyFormSubmit={onNewToyFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer url={url} toys={toys} onToyDelete={onToyDelete} />
    </>
  );
}

export default App;
