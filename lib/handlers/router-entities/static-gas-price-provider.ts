import { GasPrice, IGasPriceProvider } from "@basex-fi/smart-order-router";
import { BigNumber } from "ethers";

export class StaticGasPriceProvider implements IGasPriceProvider {
  constructor(private gasPriceWei: BigNumber) {}
  async getGasPrice(): Promise<GasPrice> {
    return { gasPriceWei: this.gasPriceWei };
  }
}
