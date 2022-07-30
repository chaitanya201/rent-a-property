import React, { useState } from "react";
import Select from "react-select";
export default function PropertyFilter({
  properties = [],
  setFilteredProperties,
  setShowFilteredProperties,
}) {
  const [selectedLocation, setSelectedLocation] = useState({
    label: "Mumbai",
    value: "mumbai",
  });
  const d = new Date();
  const [date, setDate] = useState(
    `${d.getFullYear()}-${
      d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth()
    }-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}`
  );

  const [rentRange, setRentRange] = useState({
    label: "$500 - $1000",
    value: { min: 500, max: 1000 },
  });
  const [selectedPropertyType, setSelectedPropertyType] = useState({
    label: "Residential",
    value: "residential",
  });
  // Options
  // 1. Location Options
  const locationOptions = [
    { label: "Delhi", value: "delhi" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Kashmir", value: "kashmir" },
  ];

  // 2 Price Options
  const priceOptions = [
    { label: "$500 - $1000", value: { min: 500, max: 1000 } },
    { label: "$1100 - $2000", value: { min: 1100, max: 2000 } },
    { label: "$2100 - $3000", value: { min: 2100, max: 3000 } },
    { label: "$3100 - $4000", value: { min: 3100, max: 4000 } },
  ];

  // 3 property types
  const propertyTypeOptions = [
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Mixed use", value: "mixeduse" },
    { label: "Industrial", value: "industrial" },
    { label: "Agriculture", value: "agriculture" },
  ];

  const onFilter = (e) => {
    e.preventDefault();
    console.log("filter..");
    setFilteredProperties(() =>
      properties.filter((property) => {
        if (
          property.location.includes(selectedLocation.value) &&
          rentRange.value.min <= property.rent &&
          property.rent <= rentRange.value.max &&
          property.type === selectedPropertyType.value &&
          new Date(date).getTime() >= new Date(property.date).getTime()
        ) {
          return property;
        }
      })
    );
    setShowFilteredProperties(true);
  };

  return (
    <div>
      <div className=" sm:bg-red-400 sm:flex-col md:bg-cyan-400 md:flex md:justify-between lg:flex lg:justify-between lg:bg-green-500 xl:bg-yellow-400 xl:flex xl:justify-between 2xl:flex 2xl:justify-between 2xl:bg-indigo-800 ">
        <form onSubmit={onFilter}>
          <div>
            <h1>Location</h1>
            <Select
              value={selectedLocation}
              options={locationOptions}
              onChange={(e) => {
                setSelectedLocation({ label: e.label, value: e.value });
              }}
            ></Select>
          </div>
          <div>
            <h1>Date/When</h1>
            <input
              type={"date"}
              defaultValue={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h1>Price</h1>
            <Select
              options={priceOptions}
              value={rentRange}
              onChange={(e) => {
                setRentRange({
                  label: e.label,
                  value: { min: e.value.min, max: e.value.max },
                });
              }}
            ></Select>
          </div>
          <div className=" sm:flex-col space-x-4">
            <div>
              <h1>Property Type</h1>
              <Select
                value={selectedPropertyType}
                options={propertyTypeOptions}
                onChange={(e) => {
                  setSelectedPropertyType({ label: e.label, value: e.value });
                }}
              ></Select>
            </div>
            <div className="pt-1 ">
              <input
                type="submit"
                value={"Filter"}
                className="bg-teal-500 p-2 rounded-lg"
              />
            </div>
          </div>
        </form>
        <div className=" ">
          <button
            onClick={() => {
              console.log("clicked");
              setShowFilteredProperties(false);
            }}
            className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span className="relative">Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
}
