import React from "react";

const Categories = ({ uniqueTitles, filterItems, data }) => {
  return (
    <div className='btn-container'>
      {uniqueTitles.map((index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn"
            onClick={() => filterItems(index)}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
