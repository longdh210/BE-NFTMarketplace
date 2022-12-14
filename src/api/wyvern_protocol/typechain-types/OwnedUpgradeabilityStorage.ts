/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OwnedUpgradeabilityStorageInterface extends utils.Interface {
  functions: {
    "upgradeabilityOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "upgradeabilityOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "upgradeabilityOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OwnedUpgradeabilityStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnedUpgradeabilityStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    upgradeabilityOwner(overrides?: CallOverrides): Promise<[string]>;
  };

  upgradeabilityOwner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    upgradeabilityOwner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    upgradeabilityOwner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    upgradeabilityOwner(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
