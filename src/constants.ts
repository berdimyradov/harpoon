export const pokemon_order = [
  62, 75, 74, 71, 96, 90, 12, 100, 21, 105, 8, 88, 82, 60, 27, 13, 73, 11, 2,
  70, 31, 57, 45, 4, 26, 48, 28, 53, 103, 98, 30, 49, 69, 83, 64, 37, 50, 52,
  86, 1, 63, 44, 84, 93, 66, 101, 51, 42, 76, 80, 87, 15, 91, 85, 106, 68, 58,
  77, 24, 67, 16, 39, 40, 97, 108, 5, 78, 43, 38, 7, 102, 29, 46, 6, 92, 35, 10,
  104, 65, 72, 32, 81, 95, 36, 25, 18, 107, 17, 79, 20, 19, 94, 23, 56, 33, 55,
  34, 47, 89, 14, 22, 3, 54, 9, 99, 41, 59, 61,
] as const;

export const POKEMONS_IS_CAUGHT_BY: Record<number, string> = {
  46: "berdimyradov",
  85: "rovshen99",
  75: "bezirgen8989"
} as const;

export const POKEMONS_IS_SHINY: Record<number, boolean> = {
  46: true,
  85: true,
} as const;
