// import logo from "./logo.svg";
import "./App.css";
import BestPokemon from "./BestPokemon";
import Logo from "./logo.js";
import CaughtPokemon from "./CaughtPokemon";
import PokemonCity from "./PokemonCity";
import PokemonMovesSelector from "./PokemonMovesSelector";

const App = ()=> {
let favName = "Rahwa's";
function logWhenClicked(){
    console.log("Hello Pokedemon");
  }
  return (
    <div>
      <header>
        <Logo appName="Pokedex" handleClick={logWhenClicked} />
        <BestPokemon myFav={favName}
          abilities={["Anticipation", "Adaptability", "Run-Away"]}
        />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        <PokemonMovesSelector />
        <PokemonCity />
      </header>
    </div>
  );
  };
export default App;
