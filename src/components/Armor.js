import React from "react";

const Armor = ({ armor }) => {
  return (
    <div className="armor">
      <h3>{armor.name}</h3>
      <p>{armor.description}</p>
      <img src={armor.image} alt={armor.name} />
    </div>
  );
};

export default Armor;
