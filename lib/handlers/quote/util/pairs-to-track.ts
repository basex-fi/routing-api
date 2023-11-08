import { TradeType } from "@basex-fi/sdk-core";

export const PAIRS_TO_TRACK: Map<string, Map<TradeType, string[]>> = new Map([
  [
    "8453",
    new Map([
      [TradeType.EXACT_INPUT, ["WETH/USDC", "USDC/WETH"]],
      [TradeType.EXACT_OUTPUT, ["USDC/WETH"]],
    ]),
  ],
]);
