"use client";

import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { Pokemon } from "@/types";
import { EXT, IMAGE_URL } from "@/constants";

const PokemonTooltipTemplate = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props;
  return (
    <div className="p-2">
      <div>
        {/* {pokemon.id} */}
        <b>Pokemon: </b>
        {pokemon.name}
      </div>

      {pokemon.owner ? (
        <div>
          <b>Owner: </b>
          {pokemon.owner}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image
            width={112}
            height={112}
            src={`${IMAGE_URL}/${pokemon.id}.${EXT}`}
            alt={pokemon.id.toString()}
          />
          <i>Default version</i>
        </div>
      )}

      {pokemon.owner && pokemon.isShiny ? (
        <span className="absolute top-0.5 right-1.5">⭐️</span>
      ) : null}

      {pokemon.owner && !pokemon.isShiny ? (
        <div className="flex flex-col items-center">
          <Image
            width={112}
            height={112}
            src={`${IMAGE_URL}/shiny/${pokemon.id}.${EXT}`}
            alt={pokemon.id.toString()}
          />
          <i>Shiny version</i>
        </div>
      ) : null}
    </div>
  );
};

export const PokemonTooltip = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <Tooltip
      id="my-tooltip"
      // openOnClick={true}
      render={(props) => {
        if (!props.content) return null;
        const pokemonId = Number(props.content);
        const pokemon = pokemons.find((p) => p.id === pokemonId) as Pokemon;
        return <PokemonTooltipTemplate pokemon={pokemon} />;
      }}
    />
  );
};
