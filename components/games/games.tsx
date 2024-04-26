"use client";

import { useEffect, useState } from "react";
import Tile from "../tile";
import Modal from "../modal";
import Image from "next/image";
import { DIRECTIONS } from "@/constants";

export interface IGame {
  game_id: number;
  image_url: string;
  name: string;
  provider_name: string;
}
interface GamesProps {
  data: {
    list: IGame[];
  };
}

const Games: React.FunctionComponent<GamesProps> = ({ data: { list } }) => {
  const [tilesIndex, setTilesIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const moveTiles = (direction: string) => {
    const directionValue = DIRECTIONS.LEFT === direction ? -1 : +1;
    let newTilesIndex = tilesIndex + directionValue;

    if (newTilesIndex >= 0 && newTilesIndex < list.length) {
      setTilesIndex(newTilesIndex);
    }
  };

  useEffect(() => {
    const tilesEl = document.querySelector(".tiles") as HTMLElement;
    const tileEl = document.querySelector(".tile");
    const tilesGap = getComputedStyle(tilesEl as HTMLElement).getPropertyValue(
      "gap"
    );
    const tileElWidth = tileEl?.getBoundingClientRect().width;

    tilesEl.style.transform = `translateX(calc((${tileElWidth}px + ${tilesGap}) * -${tilesIndex}))`;
  }, [tilesIndex]);

  return (
    <article className="games overflow-hidden">
      <header className="flex justify-between">
        <div className="casino__header flex justify-between mb-8">
          <h1>New games</h1>
        </div>

        <section className="flex items-start gap-2">
          <Image
            src={"/button-left.png"}
            width={32}
            height={32}
            alt="Move tiles left"
            fill={false}
            onClick={() => moveTiles(DIRECTIONS.LEFT)}
            className={
              tilesIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }
          />

          <Image
            src={"/button-right.png"}
            width={32}
            height={32}
            alt="Move tiles right"
            fill={false}
            onClick={() => moveTiles(DIRECTIONS.RIGHT)}
            className={
              tilesIndex === list.length - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }
          />
        </section>
      </header>

      <div className="tiles w-[10000px] flex flex-nowrap gap-4 transition-all duration-300">
        {list.map((game) => (
          <Tile
            data={game}
            onClick={() => setShowModal(true)}
            key={game.game_id}
          />
        ))}
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </article>
  );
};

export default Games;
