"use client";

import { useState } from "react";

interface CalcProps {
  currency: string;
  rate: number;
}

interface CalcState {
  crypto: string | number;
  rate: string | number;
}

const Calc: React.FunctionComponent<CalcProps> = ({ currency, rate }) => {
  const [inputValues, setInputValues] = useState({
    crypto: 1,
    rate,
  } as CalcState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCrypto = e.target.name === "crypto";
    const newState = {} as CalcState;

    newState[e.target.name as keyof CalcState] = e.target.value;

    newState[isCrypto ? "rate" : "crypto"] = Number(
        eval(`${e.target.value} ${isCrypto ? "*" : "/"} ${rate}`)
    ).toFixed(isCrypto ? 2 : 8);

    setInputValues(newState);
  };

  return (
    <article className="calc">
      <header className="text-[0.5rem] text-[#8392AA]">
        CONVERSION {currency.toUpperCase()}
      </header>

      <form className="text-black flex flex-col md:flex-row gap-4 md:gap-16 mt-1">
        <input
          type="number"
          name="crypto"
          step="0.00000001"
          value={inputValues.crypto}
          className="flex-1 bg-[#28374D] text-white text-[0.7rem] p-2"
          onChange={onChange}
        />

        <input
          type="number"
          name="rate"
          step="0.01"
          value={inputValues.rate}
          className="flex-1 bg-[#28374D] text-white text-[0.7rem] p-2"
          onChange={onChange}
        />
      </form>
    </article>
  );
};

export default Calc;
