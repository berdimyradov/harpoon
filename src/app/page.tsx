import {
  POKEMONS_IS_CAUGHT_BY,
  POKEMONS_IS_SHINY,
  pokemon_order,
  SUPPORTED_POKEMONS,
} from "@/constants";
import { Pokemon } from "@/types";
import { Board } from "@/components/Board";
import { PokemonTooltip } from "@/components/PokemonTooltip";

export default async function Home() {
  const pokemons: Pokemon[] = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${SUPPORTED_POKEMONS}`
  )
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
    });

  return (
    <>
      <Board pokemons={pokemons} />
      <PokemonTooltip pokemons={pokemons} />
    </>
  );
}
