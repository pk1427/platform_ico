'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="font-bold">
        <span >Manager :</span>
        <span> 0x....234</span>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
