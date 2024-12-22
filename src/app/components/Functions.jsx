"use client";
import React, { useState } from "react";
import BuyToken from "./BuyToken";
import TransferEther from "./TransferEther";
import TransferToManager from "./TransferToManager";

const Functions = () => {
  const [tabs, setTabs] = useState(0);

  const [managerTabs, setManagerTabs] = useState(0);
  return (
    <>
      <div className=" flex gap-5">
        <button
          onClick={() => {
            setTabs(0);
          }}
        >
          Buy tokens
        </button>
        <button
          onClick={() => {
            setTabs(1);
          }}
        >
          Transfer to Manager
        </button>
        <button
          onClick={() => {
            setTabs(2);
          }}
        >
          Transfer Ether
        </button>
      </div>

      <div className="outline h-[25vh] w-full m-3">
        {tabs === 0 && <BuyToken />}
        {tabs === 1 && <TransferToManager />}
        {tabs === 2 && <TransferEther />}
      </div>

      <h1>ONLY MANAGER</h1>

      <div className=" flex gap-5">
        <button
          onClick={() => {
            setManagerTabs(0);
          }}
        >
          Withdraw all tokens
        </button>
        <button
          onClick={() => {
            setManagerTabs(1);
          }}
        >
          Check token balance
        </button>
        <button
          onClick={() => {
            setManagerTabs(2);
          }}
        >
          Update token
        </button>

        <button
          onClick={() => {
            setManagerTabs(2);
          }}
        >
          Update Selling Price
        </button>
      </div>

      <div className="outline h-[25vh] w-full m-3">
        {managerTabs === 0 && <BuyToken />}
        {managerTabs === 1 && <TransferToManager />}
        {managerTabs === 2 && <TransferEther />}
      </div>
    </>
  );
};

export default Functions;
