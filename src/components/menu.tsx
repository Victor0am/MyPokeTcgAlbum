"use client";
import { setApiDataResponse } from "@/lib/setApiDataResponse";
import Image from "next/image";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useMenuStore } from "@/store/menuStore";
import Link from "next/link";

export default function Menu() {
  const [setList, setSetList] = useState<PokemonTCG.Set[]>([]);
  const isMenuOpened = useMenuStore((state) => state.isOpen);

  useEffect(() => {
    async function fetchData() {
      const getSetPromise = await fetch(
        `https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate`
      );
      const responseJson: setApiDataResponse = await getSetPromise.json();
      setSetList(responseJson.data);
    }
    fetchData();
  }, []);

  // return <></>;
  if (isMenuOpened)
    return (
      <ScrollArea className="w-1/6 ">
        <div className="flex flex-col h-svh justify-items-center space-y-2 z-0">
          {setList.map((set) => (
            <Link
              key={set.id}
              href={`/set/${set.ptcgoCode}`}
              className=" m-10 mx-15 basis-1/6"
            >
              <Image
                width={150}
                height={25}
                src={set.images.logo}
                alt={set.name}
              />
            </Link>
          ))}
        </div>
        <ScrollBar />
      </ScrollArea>
    );
}
