import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [numberOfCaught,setNumberOfCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

    function handleCatchPokemon (event){
      setPokemonNameInput(event.target.value);
    }
    const catchPokemon = () => {
      setNumberOfCaught((c) => c.concat(pokemonNameInput));
      setPokemonNameInput("");
    };
  return (
    <div>
      <p>
        Caught {numberOfCaught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleCatchPokemon}
      ></input>
      <button onClick={catchPokemon}>catch Pokemon</button>
      <ul>
        {numberOfCaught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
