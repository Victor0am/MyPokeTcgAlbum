import Menu from "@/components/menu";
import { pokeApiDataResponse } from "@/lib/pokeApiDataResponse";
import Image from "next/image";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export default async function Home() {
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=set.ptcgoCode:PRE&pageSize=18&page=1`
  );
  const responseJson: pokeApiDataResponse = await response.json();
  const cards: PokemonTCG.Card[] = responseJson.data;
  const isMenuOpened = true;
  return (
    <div className="flex flex-row justify-between ">
      {isMenuOpened && <Menu></Menu>}
      <div className="flex flex-col object-contain bg-black/50 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-3">
          {cards.map((card) => {
            return (
              <Image
                key={card.id}
                src={`${card.images.large}`}
                width={200}
                height={100}
                alt={`${card.name} ${card.id}`}
                className="py-2 align-middle justify-self-center"
              />
            );
          })}
        </div>
        <div className="h-8"></div>
      </div>
    </div>
  );
}
