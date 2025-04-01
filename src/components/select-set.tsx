import { setApiDataResponse } from "@/lib/setApiDataResponse";
import Link from "next/link";
import React, { use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
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

export default function SelectSetPage() {
  const responseJson: setApiDataResponse = use(
    fetch(
      `https://api.pokemontcg.io/v2/sets?q=series:Scarlet & Violet&orderBy=-releaseDate`
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("error parsing json from response:", error);
      })
  );
  const setList = responseJson.data;
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
              <Select>
                <SelectTrigger id="set">
                  <SelectValue placeholder="Select a set" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {setList.map((item, index) => {
                    return (
                      <SelectItem
                        key={item.id + " - " + index}
                        value={item.ptcgoCode}
                      >
                        <Link href={`/set/${item.ptcgoCode}`}>{item.name}</Link>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
