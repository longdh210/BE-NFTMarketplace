// import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber, Bytes } from 'ethers';
import Web3 from 'web3';
// import { web3 } from 'hardhat';
import { Address } from 'hardhat-deploy/dist/types';
import { CHAIN_ADDRESSES } from '../config/address';

const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v2/BAexJjh839qZdzF1_CxPlqcd3WRQexU9"));

const makeOrder = (
  exchange: Address,
  isMaker: boolean,
  accounts: Address,
  target: Address,
  calldata: string,
  replacementPattern: string,
) => ({
  exchange: exchange,
  maker: accounts,
  taker: accounts,
  makerRelayerFee: 0,
  takerRelayerFee: 0,
  makerProtocolFee: 0,
  takerProtocolFee: 0,
  feeRecipient: isMaker ? accounts : '0x0000000000000000000000000000000000000000',
  feeMethod: 0,
  side: 0,
  saleKind: 0,
  target: target,
  howToCall: 0,
  _calldata: calldata,
  replacementPattern: replacementPattern,
  staticTarget: '0x0000000000000000000000000000000000000000',
  staticExtradata: '0x',
  paymentToken: CHAIN_ADDRESSES.localhost.MockERC20ContractAddress,
  basePrice: 0,
  extra: 0,
  listingTime: 0,
  expirationTime: 0,
  salt: Math.floor(Math.random() * 1000),
});
type Order = ReturnType<typeof makeOrder>;

const hashOrder = (order: Order) => {
  const hash = web3.utils.soliditySha3(
    { type: 'address', value: order.exchange },
    { type: 'address', value: order.maker },
    { type: 'address', value: order.taker },
    { type: 'uint', value: BigNumber.from(order.makerRelayerFee).toString() },
    { type: 'uint', value: BigNumber.from(order.takerRelayerFee).toString() },
    { type: 'uint', value: BigNumber.from(order.takerProtocolFee).toString() },
    { type: 'uint', value: BigNumber.from(order.takerProtocolFee).toString() },
    { type: 'address', value: order.feeRecipient },
    { type: 'uint8', value: order.feeMethod.toString() },
    { type: 'uint8', value: order.side.toString() },
    { type: 'uint8', value: order.saleKind.toString() },
    { type: 'address', value: order.target },
    { type: 'uint8', value: order.howToCall.toString() },
    { type: 'bytes', value: order._calldata },
    { type: 'bytes', value: order.replacementPattern },
    { type: 'address', value: order.staticTarget },
    { type: 'bytes', value: order.staticExtradata },
    { type: 'address', value: order.paymentToken },
    { type: 'uint', value: BigNumber.from(order.basePrice).toString() },
    { type: 'uint', value: BigNumber.from(order.extra).toString() },
    { type: 'uint', value: BigNumber.from(order.listingTime).toString() },
    { type: 'uint', value: BigNumber.from(order.expirationTime).toString() },
    { type: 'uint', value: BigNumber.from(order.salt).toString() },
  );
  if (hash) {
    return hash.toString();
  } else {
    throw new Error('Failed to hash');
  }
};

export { makeOrder, hashOrder };
