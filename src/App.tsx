import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "./App.css";
import { USERS, User, random_set } from "./users";

const SUPPORTED_USERS = 108;
const usersMap: UserMap = USERS.slice(0, SUPPORTED_USERS).reduce(
  (accum, user, index) => {
    accum[random_set[index]] = user;
    return accum;
  },
  {} as UserMap
);

const Board = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${SUPPORTED_USERS}`)
      .then((response) => response.json())
      .then((pokeData) => {
        setPokemons(pokeData.results);
      });
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-start content-center">
      {pokemons.map((pokemon, index) => {
        index++;
        const isPokemonActivated = index in usersMap;
        const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

        return (
          <div
            key={pokemon.name}
            className="grow-0 shrink-0 basis-auto m-px border h-24 w-24 bg-no-repeat"
            style={{
              backgroundImage: `url(${pokemonImageUrl})`,
              filter: `grayscale(${isPokemonActivated ? "0" : "100%"})`,
            }}
          >
            {isPokemonActivated ? (
              <a
                href={`https://github.com/${usersMap[index].username}`}
                id={pokemon.name}
                className="relative block top-0 left-0 w-full h-full text-right pr-1"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Pokemon: ${pokemon.name} | User: ${usersMap[index].username}`}
              >
                {index}
              </a>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="h-full">
      <Board />
      <Tooltip id="my-tooltip" />
    </div>
  );
}

export default App;

type UserMap = Record<number, User>;
type Pokemon = {
  name: string;
};
