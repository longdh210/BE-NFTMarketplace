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

export interface ExchangeCoreInterface extends utils.Interface {
  functions: {
    "INVERSE_BASIS_POINT()": FunctionFragment;
    "__ExchangeCore_init(uint256,uint256)": FunctionFragment;
    "approvedOrders(bytes32)": FunctionFragment;
    "cancelledOrFinalized(bytes32)": FunctionFragment;
    "changeMinimumMakerProtocolFee(uint256)": FunctionFragment;
    "changeMinimumTakerProtocolFee(uint256)": FunctionFragment;
    "changeProtocolFeeRecipient(address)": FunctionFragment;
    "exchangeToken()": FunctionFragment;
    "minimumMakerProtocolFee()": FunctionFragment;
    "minimumTakerProtocolFee()": FunctionFragment;
    "owner()": FunctionFragment;
    "protocolFeeRecipient()": FunctionFragment;
    "registry()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "staticCall(address,bytes,bytes)": FunctionFragment;
    "tokenTransferProxy()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "INVERSE_BASIS_POINT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__ExchangeCore_init",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedOrders",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelledOrFinalized",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeMinimumMakerProtocolFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeMinimumTakerProtocolFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeProtocolFeeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumMakerProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumTakerProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "staticCall",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTransferProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "INVERSE_BASIS_POINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__ExchangeCore_init",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelledOrFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMinimumMakerProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMinimumTakerProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeProtocolFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumMakerProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumTakerProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staticCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenTransferProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OrderApprovedPartOne(bytes32,address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address)": EventFragment;
    "OrderApprovedPartTwo(bytes32,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bool)": EventFragment;
    "OrderCancelled(bytes32)": EventFragment;
    "OrdersMatched(bytes32,bytes32,address,address,uint256,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderApprovedPartOne"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderApprovedPartTwo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OrderApprovedPartOneEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    number,
    number,
    string
  ],
  {
    hash: string;
    exchange: string;
    maker: string;
    taker: string;
    makerRelayerFee: BigNumber;
    takerRelayerFee: BigNumber;
    makerProtocolFee: BigNumber;
    takerProtocolFee: BigNumber;
    feeRecipient: string;
    feeMethod: number;
    side: number;
    saleKind: number;
    target: string;
  }
>;

export type OrderApprovedPartOneEventFilter =
  TypedEventFilter<OrderApprovedPartOneEvent>;

export type OrderApprovedPartTwoEvent = TypedEvent<
  [
    string,
    number,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ],
  {
    hash: string;
    howToCall: number;
    _calldata: string;
    replacementPattern: string;
    staticTarget: string;
    staticExtradata: string;
    paymentToken: string;
    basePrice: BigNumber;
    extra: BigNumber;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    salt: BigNumber;
    orderbookInclusionDesired: boolean;
  }
>;

export type OrderApprovedPartTwoEventFilter =
  TypedEventFilter<OrderApprovedPartTwoEvent>;

export type OrderCancelledEvent = TypedEvent<[string], { hash: string }>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export type OrdersMatchedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  {
    buyHash: string;
    sellHash: string;
    maker: string;
    taker: string;
    price: BigNumber;
    metadata: string;
  }
>;

export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ExchangeCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeCoreInterface;

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
    INVERSE_BASIS_POINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    __ExchangeCore_init(
      _minimumMakerProtocolFee: BigNumberish,
      _minimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedOrders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    cancelledOrFinalized(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    changeMinimumMakerProtocolFee(
      newMinimumMakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeMinimumTakerProtocolFee(
      newMinimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeProtocolFeeRecipient(
      newProtocolFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchangeToken(overrides?: CallOverrides): Promise<[string]>;

    minimumMakerProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumTakerProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staticCall(
      target: string,
      _calldata: BytesLike,
      extradata: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { result: boolean }>;

    tokenTransferProxy(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  INVERSE_BASIS_POINT(overrides?: CallOverrides): Promise<BigNumber>;

  __ExchangeCore_init(
    _minimumMakerProtocolFee: BigNumberish,
    _minimumTakerProtocolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedOrders(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  cancelledOrFinalized(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  changeMinimumMakerProtocolFee(
    newMinimumMakerProtocolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeMinimumTakerProtocolFee(
    newMinimumTakerProtocolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeProtocolFeeRecipient(
    newProtocolFeeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchangeToken(overrides?: CallOverrides): Promise<string>;

  minimumMakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  minimumTakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staticCall(
    target: string,
    _calldata: BytesLike,
    extradata: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenTransferProxy(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INVERSE_BASIS_POINT(overrides?: CallOverrides): Promise<BigNumber>;

    __ExchangeCore_init(
      _minimumMakerProtocolFee: BigNumberish,
      _minimumTakerProtocolFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approvedOrders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cancelledOrFinalized(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    changeMinimumMakerProtocolFee(
      newMinimumMakerProtocolFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeMinimumTakerProtocolFee(
      newMinimumTakerProtocolFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeProtocolFeeRecipient(
      newProtocolFeeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    exchangeToken(overrides?: CallOverrides): Promise<string>;

    minimumMakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    minimumTakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    staticCall(
      target: string,
      _calldata: BytesLike,
      extradata: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenTransferProxy(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OrderApprovedPartOne(bytes32,address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address)"(
      hash?: BytesLike | null,
      exchange?: null,
      maker?: string | null,
      taker?: null,
      makerRelayerFee?: null,
      takerRelayerFee?: null,
      makerProtocolFee?: null,
      takerProtocolFee?: null,
      feeRecipient?: string | null,
      feeMethod?: null,
      side?: null,
      saleKind?: null,
      target?: null
    ): OrderApprovedPartOneEventFilter;
    OrderApprovedPartOne(
      hash?: BytesLike | null,
      exchange?: null,
      maker?: string | null,
      taker?: null,
      makerRelayerFee?: null,
      takerRelayerFee?: null,
      makerProtocolFee?: null,
      takerProtocolFee?: null,
      feeRecipient?: string | null,
      feeMethod?: null,
      side?: null,
      saleKind?: null,
      target?: null
    ): OrderApprovedPartOneEventFilter;

    "OrderApprovedPartTwo(bytes32,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bool)"(
      hash?: BytesLike | null,
      howToCall?: null,
      _calldata?: null,
      replacementPattern?: null,
      staticTarget?: null,
      staticExtradata?: null,
      paymentToken?: null,
      basePrice?: null,
      extra?: null,
      listingTime?: null,
      expirationTime?: null,
      salt?: null,
      orderbookInclusionDesired?: null
    ): OrderApprovedPartTwoEventFilter;
    OrderApprovedPartTwo(
      hash?: BytesLike | null,
      howToCall?: null,
      _calldata?: null,
      replacementPattern?: null,
      staticTarget?: null,
      staticExtradata?: null,
      paymentToken?: null,
      basePrice?: null,
      extra?: null,
      listingTime?: null,
      expirationTime?: null,
      salt?: null,
      orderbookInclusionDesired?: null
    ): OrderApprovedPartTwoEventFilter;

    "OrderCancelled(bytes32)"(
      hash?: BytesLike | null
    ): OrderCancelledEventFilter;
    OrderCancelled(hash?: BytesLike | null): OrderCancelledEventFilter;

    "OrdersMatched(bytes32,bytes32,address,address,uint256,bytes32)"(
      buyHash?: null,
      sellHash?: null,
      maker?: string | null,
      taker?: string | null,
      price?: null,
      metadata?: BytesLike | null
    ): OrdersMatchedEventFilter;
    OrdersMatched(
      buyHash?: null,
      sellHash?: null,
      maker?: string | null,
      taker?: string | null,
      price?: null,
      metadata?: BytesLike | null
    ): OrdersMatchedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    INVERSE_BASIS_POINT(overrides?: CallOverrides): Promise<BigNumber>;

    __ExchangeCore_init(
      _minimumMakerProtocolFee: BigNumberish,
      _minimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedOrders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelledOrFinalized(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeMinimumMakerProtocolFee(
      newMinimumMakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeMinimumTakerProtocolFee(
      newMinimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeProtocolFeeRecipient(
      newProtocolFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchangeToken(overrides?: CallOverrides): Promise<BigNumber>;

    minimumMakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    minimumTakerProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staticCall(
      target: string,
      _calldata: BytesLike,
      extradata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenTransferProxy(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INVERSE_BASIS_POINT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    __ExchangeCore_init(
      _minimumMakerProtocolFee: BigNumberish,
      _minimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedOrders(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelledOrFinalized(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeMinimumMakerProtocolFee(
      newMinimumMakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeMinimumTakerProtocolFee(
      newMinimumTakerProtocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeProtocolFeeRecipient(
      newProtocolFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchangeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumMakerProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumTakerProtocolFee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFeeRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staticCall(
      target: string,
      _calldata: BytesLike,
      extradata: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenTransferProxy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
