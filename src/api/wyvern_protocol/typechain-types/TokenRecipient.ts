/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TokenRecipientInterface extends utils.Interface {
  functions: {
    "receiveApproval(address,uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "receiveApproval",
    values: [string, BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "receiveApproval",
    data: BytesLike
  ): Result;

  events: {
    "ReceivedEther(address,uint256)": EventFragment;
    "ReceivedTokens(address,uint256,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ReceivedEther"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceivedTokens"): EventFragment;
}

export type ReceivedEtherEvent = TypedEvent<
  [string, BigNumber],
  { sender: string; amount: BigNumber }
>;

export type ReceivedEtherEventFilter = TypedEventFilter<ReceivedEtherEvent>;

export type ReceivedTokensEvent = TypedEvent<
  [string, BigNumber, string, string],
  { from: string; value: BigNumber; token: string; extraData: string }
>;

export type ReceivedTokensEventFilter = TypedEventFilter<ReceivedTokensEvent>;

export interface TokenRecipient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenRecipientInterface;

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
    receiveApproval(
      from: string,
      value: BigNumberish,
      token: string,
      extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  receiveApproval(
    from: string,
    value: BigNumberish,
    token: string,
    extraData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    receiveApproval(
      from: string,
      value: BigNumberish,
      token: string,
      extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ReceivedEther(address,uint256)"(
      sender?: string | null,
      amount?: null
    ): ReceivedEtherEventFilter;
    ReceivedEther(
      sender?: string | null,
      amount?: null
    ): ReceivedEtherEventFilter;

    "ReceivedTokens(address,uint256,address,bytes)"(
      from?: string | null,
      value?: null,
      token?: string | null,
      extraData?: null
    ): ReceivedTokensEventFilter;
    ReceivedTokens(
      from?: string | null,
      value?: null,
      token?: string | null,
      extraData?: null
    ): ReceivedTokensEventFilter;
  };

  estimateGas: {
    receiveApproval(
      from: string,
      value: BigNumberish,
      token: string,
      extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    receiveApproval(
      from: string,
      value: BigNumberish,
      token: string,
      extraData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
