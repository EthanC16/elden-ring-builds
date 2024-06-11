import React, { useState, useEffect } from "react";
import { getArmors, getWeapons, getTalismans } from "./apiService";
import Armor from "./components/Armor";
import Weapon from "./components/Weapon";
import Talisman from "./components/Talisman";
import "./App.css";

const App = () => {
  const [armors, setArmors] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [randomArmor, setRandomArmor] = useState(null);
  const [randomWeapon, setRandomWeapon] = useState(null);
  const [talismans, setTalismans] = useState([]);
  const [randomTalismans, setRandomTalismans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedArmors = await getArmors();
      const fetchedWeapons = await getWeapons();
      const fetchedTalismans = await getTalismans();
      setArmors(fetchedArmors);
      setWeapons(fetchedWeapons);
      setTalismans(fetchedTalismans);
    };
    fetchData();
  }, []);

  const getRandomBuild = () => {
    if (armors.length > 0 && weapons.length > 0) {
      const randomArmor = armors[Math.floor(Math.random() * armors.length)];
      const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
      const shuffledTalismans = talismans.sort(() => 0.5 - Math.random());
      const randomTalismans = shuffledTalismans.slice(0, 3);
      setRandomArmor(randomArmor);
      setRandomWeapon(randomWeapon);
      setRandomTalismans(randomTalismans);
    }
  };

  return (
    <div className="App">
      <h1>Elden Ring Random Build</h1>
      <button onClick={getRandomBuild}>Get Random Build</button>
      <div className="build">
        {randomArmor && <Armor armor={randomArmor} />}
        {randomWeapon && <Weapon weapon={randomWeapon} />}
        {randomTalismans.map((talisman, index) => (
          <Talisman key={index} talisman={talisman} />
        ))}
      </div>
    </div>
  );
};

export default App;
