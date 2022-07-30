import React from "react";

export default function ShowProperties({ properties = [] }) {

  // if property array is empty then it will simply display the below message.
  if (properties.length === 0) {
    return <div>No Result found</div>;
  }

  // this function basically displays all the properties in the form of grid
  // all of the fields of a property are displayed. 
  // this grid is fully responsive.
  // it can be viewed from any type of device, it will not break.
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2">
      {properties.map((property) => {
        return (
          <div key={property.id} className="bg-white p-3 rounded-lg">
            <img src={property.pic} alt="img" className="w-80 h-60" />
            <div className="flex content-center font-serif text-xl uppercase">
              <h1>{property.name}</h1>
            </div>
            <div className="text-xl flex">
              ${property.rent} <div className="text-sm">/month</div>{" "}
            </div>
            <div className="capitalize">{property.location}</div>
            <div className="flex justify-between max-w-fit min-w-fit space-x-2">
              <div className="flex">🛏️{property.noOfBeds}</div>
              <div>🚻{property.noOfBathrooms}</div>
              <div>Area:{property.area}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
