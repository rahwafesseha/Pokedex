const appName = "Rahwa's Pokemon";
const Logo = (props) => {
  return (
    <div>
      <h1>Welcome to {appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokemon"
      />
    </div>
  );
};
export default Logo;
