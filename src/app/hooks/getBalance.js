// import { use } from "react";
import { useAccount, useReadContract } from "wagmi";
import { PLATFORM_ABI, PLATFORM_ADDRESS } from "../constants/constant";

export const getBalance = () => {
  const { address } = useAccount;

  const {
    data: fetchData,
    isError,
    isLoading,
  } = useReadContract({
    abi: PLATFORM_ABI,
    address: PLATFORM_ADDRESS,
    functionName: "checkICOTokenBalance",
  });

  console.log("fetchdata", fetchData);

  return fetchData;
};
