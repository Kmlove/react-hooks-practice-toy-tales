import React, { useState } from "react";

function ToyForm({url, onNewToyFormSubmit}) {
  const initialValue = {
    name: "",
    image: ""
  }
  const [formData, setFormData] = useState(initialValue)
  
  function handleChange(e){
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const newToy = {
      ...formData,
      likes: 0
    }

    fetch(url, {
      method: "POST",
      headers: {
        "content-type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(data => {
      onNewToyFormSubmit(data)
      setFormData(initialValue)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
