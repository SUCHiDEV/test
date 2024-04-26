import Image from "next/image";
import { IGame } from "../games/games";

interface TileProps {
  data: IGame;
  onClick: () => void;
}

const Tile: React.FunctionComponent<TileProps> = ({
  data: { name, provider_name, image_url },
  onClick,
}) => {
  return (
    <article
      className="tile w-[240px] overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="rounded-xl h-[180px] overflow-hidden relative transition-all duration-300 hover:scale-110">
        <div className="absolute w-full h-full flex justify-center items-center opacity-0 bg-black text-xs transition-all duration-300 hover:opacity-50">
          PLAY
        </div>

        <Image
          src={image_url}
          width={240}
          height={180}
          alt={name}
          fill={false}
        />
      </div>

      <section className="tile__info mt-2">
        <div className="text-xs">{name}</div>

        <div className="text-[0.5rem] text-[#6D7D97] uppercase">
          {provider_name}
        </div>
      </section>
    </article>
  );
};

export default Tile;
