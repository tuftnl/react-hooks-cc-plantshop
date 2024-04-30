import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plant}) {

  return (
    <ul className="cards">{
      plant.map((plant) => {
        return <PlantCard key={plant.id} plant={plant}/>
      })
    }</ul>
  );
}

export default PlantList;
