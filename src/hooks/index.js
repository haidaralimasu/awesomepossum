import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import nftabi from "../contract/json/NFT.json";
import { address } from "../contract";
import { formatUnits } from "ethers/lib/utils";

const nftInterface = new ethers.utils.Interface(nftabi);

export const useTotalSupply = () => {
  const [totalSupply] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "totalSupply",
      args: [],
    }) ?? [];
  const formatedTotoalSupply = totalSupply ? totalSupply.toNumber() : 0;
  return formatedTotoalSupply;
};

export const useNftPerAddressLimit = () => {
  const [nftPerAddressLimit] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "nftPerAddressLimit",
      args: [],
    }) ?? [];
  const formatedNftPerAddressLimit = nftPerAddressLimit
    ? nftPerAddressLimit.toNumber()
    : 0;
  return formatedNftPerAddressLimit;
};

export const useMaxSupply = () => {
  const [maxSupply] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "maxSupply",
      args: [],
    }) ?? [];
  const formatedMaxSupply = maxSupply ? maxSupply.toNumber() : 0;
  return formatedMaxSupply;
};

export const useCost = () => {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "cost",
      args: [],
    }) ?? [];
  const formattedCost = cost ? parseFloat(formatUnits(cost, 18)) : 0;
  return formattedCost;
};

export const useWeiCost = () => {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "cost",
      args: [],
    }) ?? [];
  return cost;
};

export const useOnlyWhitelisted = () => {
  const [onlyWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "onlyWhitelisted",
      args: [],
    }) ?? [];
  return onlyWhitelisted;
};

export const useBalanceOf = (ownerAddress) => {
  const [balanceOf] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "balanceOf",
      args: [ownerAddress],
    }) ?? [];
  const formatedBalanceof = balanceOf ? balanceOf.toNumber() : 0;
  return formatedBalanceof;
};

export const useIsWhitelisted = (userAddress) => {
  const [isWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "isWhitelisted",
      args: [userAddress],
    }) ?? [];
  return isWhitelisted;
};
