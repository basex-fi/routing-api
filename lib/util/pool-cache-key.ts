import { Protocol } from "@basex-fi/router-sdk";

export const S3_POOL_CACHE_KEY = (baseKey: string, protocol: Protocol) => `${baseKey}-${protocol}`;
