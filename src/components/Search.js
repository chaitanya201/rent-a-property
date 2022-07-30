import React, { useState } from "react";

export default function Search({
  properties,
  setFilteredProperties,
  setShowFilteredProperties,
}) {
  const [query, setQuery] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    setFilteredProperties(() =>
      properties.filter((property) => {
        if (
          property.location.includes(query.trim().toLowerCase()) ||
          property.name.includes(query.trim().toLowerCase()) ||
          property.type.includes(query.trim().toLowerCase())
        ) {
          return property;
        }
      })
    );
    setShowFilteredProperties(true);
  };
  return (
    <div>
      <div >
        <form onSubmit={onSearch} className="flex">
          <input
            className="p-3 rounded-md border"
            type="text"
            placeholder="Search property"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.trim());
            }}
          />
          <div className="pl-5">
            <input
              type="submit"
              className="bg-cyan-400 p-3 rounded-md"
              value={"Search"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
