import React from "react";
import { getBalance } from "../hooks/getBalance";

const Body = () => {

    getBalance()
  return (
    <div className="h-[60vh] outline w-full p-5 flex flex-col gap-10 items-center m-5">
      <h1>Hawk ICO-Token</h1>
      <div>
        <div>
          <span>Token name :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span>Token Symbol :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span>Token balance :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span>Token supply :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span>Token Price :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span>Token Address :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span> Sold Tokens :</span>
          <span> HAWK</span>
        </div>

        <div>
          <span> Use Token balance :</span>
          <span> HAWK</span>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div>Sold tokens :</div>
          <div>Tokens left :</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `30%` }}
          ></div>
        </div>
      </div>

      <div>
        <div>
          <span> Total minted tokens :</span>
        </div>
      </div>
    </div>
  );
};

export default Body;
