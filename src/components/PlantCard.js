import React, {useState} from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant
  const [stock, setStock] = useState(true)
  const [newPrice, setNewPrice] = useState('')

  function handleEvent(e) {
    const name = e.target.name
    const value = e.target.value
    setNewPrice(values => ({...values, [name]: value}))
    console.log(newPrice)
    console.log(id)
  }

  function saveNewPrice(e) {

    //e.preventDefault();

    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPrice)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  function handleDelete(e) {

    //e.preventDefault();

    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={() => setStock(!stock)} className="primary">In Stock</button>
      ) : (
        <button onClick={setStock}>Out of Stock</button>
      )}
      <form onSubmit={saveNewPrice}>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => handleEvent(e)}></input>
        <button>Update Price</button>
        </form>
        <button style={{color: 'red'}} onClick={(e) => handleDelete(e)}>DELETE</button>
    </li>
  );
}

export default PlantCard;
