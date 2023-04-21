import { useEffect, useState } from "react";
import {
  POKEMONS_IS_CAUGHT_BY,
  POKEMONS_IS_SHINY,
  pokemon_order,
} from "./constants";
import { Pokemon } from "./types";

const SUPPORTED_USERS = 108;

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${SUPPORTED_USERS}`)
      .then((response) => response.json())
      .then((pokeData) => {
        return pokemon_order.map((id, index) => {
          const pokemon = {
            ...pokeData.results[id - 1],
            id,
            owner: POKEMONS_IS_CAUGHT_BY[index + 1],
            isShiny: !!POKEMONS_IS_SHINY[index + 1],
          };
          return pokemon;
        });
      })
      .then((results) => setPokemons(results));
  }, []);

  return pokemons;
};
