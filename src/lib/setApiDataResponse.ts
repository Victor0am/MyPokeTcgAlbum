import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
export type setApiDataResponse = {
  data: Array<PokemonTCG.Set>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};
