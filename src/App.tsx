import { Tooltip } from "react-tooltip";
import { usePokemons } from "./hooks";
import { Pokemon } from "./types";

const SPRITES_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
// const IMAGE_URL = `${SPRITES_URL}`;
const IMAGE_URL = `${SPRITES_URL}/other/official-artwork`;
// const IMAGE_URL = `${SPRITES_URL}/other/dream-world`; // .svg

const Board = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-start content-center">
      {pokemons.map(({ id, name, owner, isShiny }, index) => {
        index++;
        const bgUrl = `${IMAGE_URL}${isShiny ? "/shiny" : ""}/${id}.png`;
        return (
          <div
            key={id}
            className="grow-0 shrink-0 basis-auto m-px border h-24 w-24 bg-[length:85px_85px] bg-left-bottom bg-no-repeat text-right pr-1"
            style={{
              backgroundImage: `url(${bgUrl})`,
              filter: `grayscale(${owner ? "0" : "100%"})`,
            }}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${id}`}
          >
            {owner ? (
              <a
                href={`https://github.com/${owner}`}
                id={name}
                className="relative block top-0 left-0 w-full h-full"
              />
            ) : null}
            <span
              className={`absolute right-0.5 top-px text-sm ${
                owner ? "text-blue-700" : "text-black"
              }`}
            >
              {index}
            </span>
          </div>
        );
      })}
    </div>
  );
};

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
          <img className="h-28 w-28" src={`${IMAGE_URL}/${pokemon.id}.png`} />
          <i>Default version</i>
        </div>
      )}

      {pokemon.owner && pokemon.isShiny ? (
        <span className="absolute top-0.5 right-1.5">⭐️</span>
      ) : null}

      {pokemon.owner && !pokemon.isShiny ? (
        <div className="flex flex-col items-center">
          <img
            className="h-28 w-28"
            src={`${IMAGE_URL}/shiny/${pokemon.id}.png`}
          />
          <i>Shiny version</i>
        </div>
      ) : null}
    </div>
  );
};

function App() {
  const pokemons = usePokemons();
  return (
    <div className="h-full">
      <Board pokemons={pokemons} />
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
    </div>
  );
}

export default App;
