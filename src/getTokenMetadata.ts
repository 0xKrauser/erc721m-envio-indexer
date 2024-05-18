import { Abi, Address } from "viem";
import { getClient } from "./client";
import erc721mAbi from "../abis/erc721m.json";

export async function getTokenMetadata({
  chainId,
  address,
  tokenId,
  blockNumber,
}: {
  chainId: number;
  address: Address;
  tokenId: bigint;
  blockNumber?: bigint;
}) {
  const client = getClient(chainId);

  const config = { blockNumber, abi: erc721mAbi as Abi, address };

  let contracts = [
    { ...config, functionName: "tokenURI", arguments: [tokenId] },
  ];

  let tokenURI;
  let flag = true;
  while (flag) {
    if (!config.blockNumber) flag = false;
    try {
      const [uri] = await client.multicall({
        batchSize: 10,
        contracts,
      });

      tokenURI = uri;
      flag = false;
    } catch (e) {
      config.blockNumber = undefined;
    }
  }

  return tokenURI?.result as string | undefined;
}
