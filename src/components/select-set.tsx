"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SELECT_SET_OPTIONS = [
  {
    name: "Journey Together",
    ptcgoCode: "JTG",
  },
  {
    name: "Prismatic Evolutions",
    ptcgoCode: "PRE",
  },
  {
    name: "Surging Sparks",
    ptcgoCode: "SSP",
  },
  {
    name: "Stellar Crown",
    ptcgoCode: "SCR",
  },
  {
    name: "Shrouded Fable",
    ptcgoCode: "SFA",
  },
  {
    name: "Temporal Forces",
    ptcgoCode: "TEF",
  },
  {
    name: "Paldean Fates ",
    ptcgoCode: "PAF",
  },
  {
    name: "Paradox Rift",
    ptcgoCode: "PAR",
  },
  {
    name: "151",
    ptcgoCode: "MEW",
  },
  {
    name: "Obsidian Flames",
    ptcgoCode: "OBF",
  },
  {
    name: "Paldea Evolved",
    ptcgoCode: "PAL",
  },
  {
    name: "Scarlet & Violet",
    ptcgoCode: "SVI",
  },
  {
    name: "Scarlet & Violet Energies",
    ptcgoCode: "SVE",
  },
  {
    name: "Scarlet & Violet Black Star Promos",
    ptcgoCode: "PR-SV",
  },
];

export default function SelectSetPage() {
  const router = useRouter();
  const [selectOption, setSelectOption] = useState("");
  return (
    <div className="flex justify-center items-center h-[90vh] w-full bg-violet-950">
      <Card className="h-1/3 w-1/6 bg-white/90">
        <CardHeader>
          <CardTitle className="color">Select a set Album</CardTitle>
          <CardDescription>
            Choose a Pokemon TCG set from Scarlet & Violet onward to see its
            cards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="set">Set</Label>
              <Select onValueChange={(e) => setSelectOption(e)}>
                <SelectTrigger id="set">
                  <SelectValue placeholder="Select a set" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {SELECT_SET_OPTIONS.map((item) => {
                    return (
                      <SelectItem key={item.ptcgoCode} value={item.ptcgoCode}>
                        {item.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push(`/set/${selectOption}`)}>
            Go To Album
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
