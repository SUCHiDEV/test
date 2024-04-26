import Calc from "@/components/calc";
import Games from "@/components/games";
import { ENDPOINTS } from "@/constants";
import getData from "@/utils/getData";

const CasinoPage: React.FunctionComponent<{}> = async () => {
  const gamesData = await getData(ENDPOINTS.GAMES);
  const cryptoData = await getData(ENDPOINTS.CRYPTO, { cache: "no-store" });

  return (
    <main className="casino w-full px-16 flex flex-col items-center gap-16">
      <div className="w-full lg:w-[1280px]">
        <Games data={gamesData} />
      </div>

      <div className="w-full lg:w-[1280px] flex flex-col gap-4">
        <Calc currency="btc" rate={cryptoData?.data[0].btc.usd} />

        {/*<Calc currency="DOGE" rate={cryptoData?.data[1].doge.usd} />*/}
      </div>
    </main>
  );
};

export default CasinoPage;
