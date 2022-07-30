import React, { useState } from "react";
import PropertyFilter from "../components/PropertyFilter";
import Search from "../components/Search";
import ShowProperties from "../components/ShowProperties";
import dummyData from "../data/dummyData";



// this functions displays the rent a property page.

export default function RentProperty() {

  // list of filtered properties
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [showFilteredProperties, setShowFilteredProperties] = useState(false);

  // dummy data
  const [currentProperties, setCurrentProperties] = useState(dummyData);

  console.log("filtered properties", filteredProperties);
  console.log("all properties", currentProperties);
  return (
    <div className="bg-teal-50">
      <div className="uppercase text-2xl flex justify-center p-2 font-bold">
        <h1>Rent a property</h1>
      </div>
      <div className="p-2 flex justify-center">
        <Search
          properties={currentProperties}
          setFilteredProperties={setFilteredProperties}
          setShowFilteredProperties={setShowFilteredProperties}
        />
      </div>
      <div className="m-3 ">
        <PropertyFilter
          properties={currentProperties}
          setFilteredProperties={setFilteredProperties}
          setShowFilteredProperties={setShowFilteredProperties}
        />
      </div>
      <div className="ml-5 mr-5 md:ml-8 md:mr-8">
        <ShowProperties
          properties={
            showFilteredProperties ? filteredProperties : currentProperties
          }
        />
      </div>
    </div>
  );
}
