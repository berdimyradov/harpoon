import { EXT, IMAGE_URL } from "@/constants";
import { Pokemon } from "@/types";

export const Board = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {pokemons.map(({ id, name, owner, isShiny }, index) => {
        index++;
        const bgUrl = `${IMAGE_URL}${isShiny ? "/shiny" : ""}/${id}.${EXT}`;
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
