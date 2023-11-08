import { Protocol } from "@basex-fi/router-sdk";
import { V3SubgraphProvider } from "@basex-fi/smart-order-router";

export const chainProtocols = [
  {
    protocol: Protocol.V3,
    timeout: 90000,
    provider: new V3SubgraphProvider(3, 90000),
  },
];
