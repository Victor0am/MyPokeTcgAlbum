import Album from "@/components/album";
import { pokeApiDataResponse } from "@/lib/pokeApiDataResponse";
import React, { use } from "react";

type SetAlbumPageProps = {
  params: Promise<{
    setCode: string;
  }>;
};

export default function SetAlbumPage({ params }: SetAlbumPageProps) {
  const { setCode } = use(params);
  const setCardsApiResponse = use(
    fetch(
      `https://api.pokemontcg.io/v2/cards?q=set.ptcgoCode:${setCode}&orderBy=number`
    )
  );
  const setCardsInfo: pokeApiDataResponse = use(setCardsApiResponse.json());

  return <Album cardsInfo={setCardsInfo} />;
}
