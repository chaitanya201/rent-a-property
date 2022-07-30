import React from "react";

export default function ShowProperties({ properties = [] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {properties.map((property) => {
        return (
          <div key={property.id} >
          <img src={property.pic} alt='img'/>
            <div className="flex content-center font-serif text-xl uppercase"><h1>{property.name}</h1></div>
            <div>{property.rent}</div>
            <div>{property.location}</div>
            <div className="flex justify-between max-w-fit min-w-fit space-x-2">
              <div className="flex">🛏️{property.noOfBeds }</div>
              <div>🚻{property.noOfBathrooms}</div>
              <div>Area:{property.area}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
