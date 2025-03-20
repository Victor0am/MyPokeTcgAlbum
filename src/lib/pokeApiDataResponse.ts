import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
export type pokeApiDataResponse = {
  data: Array<PokemonTCG.Card>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};
