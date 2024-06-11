import React from "react";

const Weapon = ({ weapon }) => {
  return (
    <div className="weapon">
      <h3>{weapon.name}</h3>
      <p>{weapon.description}</p>
      <img src={weapon.image} alt={weapon.name} />
    </div>
  );
};

export default Weapon;
