import { setApiDataResponse } from "@/lib/setApiDataResponse";
import Image from "next/image";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";

export default async function Menu() {
  const response = await fetch(
    `https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate`
  );
  const responseJson: setApiDataResponse = await response.json();
  const sets: PokemonTCG.Set[] = responseJson.data;

  return (
    <ScrollArea className="w-1/6">
      <div className="h-svh flex flex-col space-y-2">
        {sets.map((set) => (
          <Image
            key={set.id}
            width={150}
            height={25}
            src={set.images.logo}
            alt={set.name}
            className="h-1/10 m-5"
          />
        ))}
      </div>
    </ScrollArea>
  );
}
