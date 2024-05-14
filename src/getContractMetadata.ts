import { Abi, Address, getContract, parseAbi } from "viem";
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

  const contract = getContract({
    address: address,
    abi: erc721mAbi,
    publicClient: client,
  });

  const config = { blockNumber, abi: erc721mAbi as Abi, address };

  const calls = [
    contract.read.name(config).catch(() => undefined),
    contract.read.symbol(config).catch(() => undefined),
    contract.read.totalSupply(config).catch(() => undefined),
    contract.read.contractUri(config).catch(() => undefined),
  ];

  const [name, symbol, totalSupply, contractUri] = await client.multicall({
    batchSize: 10,
    contracts: [
      { ...config, functionName: "name" },
      { ...config, functionName: "symbol" },
      { ...config, functionName: "totalSupply" },
      { ...config, functionName: "contractURI" },
    ],
  });

  return {
    name: name.result as string | undefined,
    totalSupply: totalSupply.result as bigint | undefined,
    symbol: symbol.result as string | undefined,
    contractUri: contractUri.result as string | undefined,
  };
}
