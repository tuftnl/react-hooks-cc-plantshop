import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])

  const [filteredPlants, setFilteredPlants] = useState([])


  const handleFilter = (filteredPlants) => {
    setFilteredPlants(plantList.filter((plant) =>
  plant.name.toLowerCase().startsWith(filteredPlants.toLowerCase())))
  console.log(filteredPlants)
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      setPlantList(data)
      setFilteredPlants(data)
    })
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search handleFilter={handleFilter}/>
      <PlantList plant={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
