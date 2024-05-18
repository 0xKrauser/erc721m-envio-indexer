import { Abi, Address } from "viem";
import { getClient } from "./client";
import erc721mAbi from "../abis/erc721m.json";

export async function getContractMetadata({
  chainId,
  address,
  blockNumber,
}: {
  chainId: number;
  address: Address;
  blockNumber?: bigint;
}) {
  const client = getClient(chainId);

  const config = { blockNumber, abi: erc721mAbi as Abi, address };

  let contracts = [
    { ...config, functionName: "name" },
    { ...config, functionName: "symbol" },
    { ...config, functionName: "totalSupply" },
    { ...config, functionName: "contractURI" },
    { ...config, functionName: "price" },
  ];

  const [name, symbol, totalSupply, contractUri, price] =
    await client.multicall({
      batchSize: 10,
      contracts,
    });

  return {
    name: name.result as string | undefined,
    totalSupply: totalSupply.result as bigint | undefined,
    symbol: symbol.result as string | undefined,
    contractUri: contractUri.result as string | undefined,
    price: price.result as bigint | undefined,
  };
}
