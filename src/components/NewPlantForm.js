import React, {useState} from "react";

function NewPlantForm() {
  const [newPlant, setNewPlant] = useState({
    id: "",
    name: "",
    image: "",
    price: ""
  })

  function handleEvent(e) {
    const name = e.target.name
    const value = e.target.value
    setNewPlant(values => ({...values, [name]: value}))
    console.log(newPlant)
  }

  function saveNewPlant(e) {

    e.preventDefault();

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={saveNewPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => handleEvent(e)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => handleEvent(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleEvent(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
