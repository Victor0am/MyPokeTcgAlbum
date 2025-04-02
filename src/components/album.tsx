import { pokeApiDataResponse } from "@/lib/pokeApiDataResponse";
import Image from "next/image";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type AlbumProps = {
  cardsInfo: pokeApiDataResponse;
};

export default async function Album({ cardsInfo }: AlbumProps) {
  if (cardsInfo === undefined) return null;
  const cards: PokemonTCG.Card[] = cardsInfo.data;
  const totalCards = cardsInfo.totalCount;
  const totalOfPages = Math.ceil(totalCards / 9);

  return (
    <Carousel
      orientation="horizontal"
      className="flex flex-col bg-black/50 w-fit h-[90vh]"
      opts={{ align: "start" }}
    >
      <CarouselContent>
        {Array.from({ length: totalOfPages }).map((_, index) => (
          <CarouselItem className="md:basis-1/2" key={index}>
            <div className="grid grid-cols-3 grid-rows-3  ">
              {cards.slice(9 * index, 9 * (index + 1)).map((card) => {
                return (
                  <Image
                    key={card.id}
                    src={`${card.images.small}`}
                    width={190}
                    height={250}
                    alt={`${card.name} ${card.id}`}
                    className="my-2 align-middle justify-self-center select-none "
                  />
                );
              })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
