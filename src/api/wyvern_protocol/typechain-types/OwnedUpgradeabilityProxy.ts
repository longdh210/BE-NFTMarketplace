/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OwnedUpgradeabilityProxyInterface extends utils.Interface {
  functions: {
    "implementation()": FunctionFragment;
    "proxyOwner()": FunctionFragment;
    "proxyType()": FunctionFragment;
    "transferProxyOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "upgradeabilityOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxyOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "proxyType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferProxyOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeabilityOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proxyOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxyType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferProxyOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeabilityOwner",
    data: BytesLike
  ): Result;

  events: {
    "ProxyOwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProxyOwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type ProxyOwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type ProxyOwnershipTransferredEventFilter =
  TypedEventFilter<ProxyOwnershipTransferredEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface OwnedUpgradeabilityProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnedUpgradeabilityProxyInterface;

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
    implementation(overrides?: CallOverrides): Promise<[string]>;

    proxyOwner(overrides?: CallOverrides): Promise<[string]>;

    proxyType(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { proxyTypeId: BigNumber }>;

    transferProxyOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeabilityOwner(overrides?: CallOverrides): Promise<[string]>;
  };

  implementation(overrides?: CallOverrides): Promise<string>;

  proxyOwner(overrides?: CallOverrides): Promise<string>;

  proxyType(overrides?: CallOverrides): Promise<BigNumber>;

  transferProxyOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    implementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeabilityOwner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    implementation(overrides?: CallOverrides): Promise<string>;

    proxyOwner(overrides?: CallOverrides): Promise<string>;

    proxyType(overrides?: CallOverrides): Promise<BigNumber>;

    transferProxyOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(implementation: string, overrides?: CallOverrides): Promise<void>;

    upgradeToAndCall(
      implementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeabilityOwner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ProxyOwnershipTransferred(address,address)"(
      previousOwner?: null,
      newOwner?: null
    ): ProxyOwnershipTransferredEventFilter;
    ProxyOwnershipTransferred(
      previousOwner?: null,
      newOwner?: null
    ): ProxyOwnershipTransferredEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    proxyOwner(overrides?: CallOverrides): Promise<BigNumber>;

    proxyType(overrides?: CallOverrides): Promise<BigNumber>;

    transferProxyOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeabilityOwner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferProxyOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      implementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeabilityOwner(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
