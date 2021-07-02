import React from "react";

// Getting the props value
const Category = ({ unique, filtersFood }) => {
  // JSX
  return (
    <div className="filter__Container">
      {/* Giving index and mapping the unique value so that it creates all btn from the values */}
      {unique.map((un, index) => {
        return (
          <button
            key={index}
            className="filter__Btn"
            // On click passing the uniue value it calls the fitlers food function from APP.js
            onClick={() => filtersFood(un)}
          >
            {un}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
