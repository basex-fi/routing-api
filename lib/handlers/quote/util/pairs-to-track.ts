import { TradeType } from "@basex-fi/sdk-core";

import { ChainId } from "../../injector-sor";

export const PAIRS_TO_TRACK: Map<ChainId, Map<TradeType, string[]>> = new Map([
  [
    ChainId.BASE,
    new Map([
      [TradeType.EXACT_INPUT, ["WETH/USDC", "USDC/WETH"]],
      [TradeType.EXACT_OUTPUT, ["USDC/WETH"]],
    ]),
  ],
]);
