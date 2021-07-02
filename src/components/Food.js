import React from "react";

// Getting the props value
const Food = ({ img, desc, title, price }) => {
  // JSX
  return (
    <section className="food__Container">
      <img src={img} alt="photo" />
      <div className="food__Details">
        <div className="food__Title">
          <h3>{title}</h3>
          <h4>{price}$</h4>
        </div>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default Food;
