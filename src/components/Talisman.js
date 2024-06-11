import React from "react";

const Talisman = ({ talisman }) => {
  return (
    <div className="talisman">
      <h3>{talisman.name}</h3>
      <p>{talisman.description}</p>
      <img src={talisman.image} alt={talisman.name} />
    </div>
  );
};

export default Talisman;
