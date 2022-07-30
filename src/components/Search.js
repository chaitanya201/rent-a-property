import React, { useState } from "react";

export default function Search({ properties,setFilteredProperties,setShowFilteredProperties }) {
  const [query, setQuery] = useState("");
  const onSearch = (e) => {
    e.preventDefault();
    console.log("filter..");
    setFilteredProperties(() =>
      properties.filter((property) => {
        if (
          property.location.includes(query.trim().toLowerCase()) ||
          property.type.includes(query.trim().toLowerCase())
        ) {
          return property;
        }
      })
    );
    setShowFilteredProperties(true);
  }
  return (
    <div>
      <div>
        <form onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search property"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.trim());
            }}
          />
          <input type="submit" value={"Search"} />
        </form>
      </div>
    </div>
  );
}
