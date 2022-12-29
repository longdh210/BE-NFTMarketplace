import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { constants, ethers, BigNumber } from "ethers";
import nftABI from "../config/abi/MockERC721.json";
import tokenABI from "../config/abi/MockERC20.json";
import exchangeABI from "../config/abi/WyvernExchange.json";
import proxyRegistryABI from "../config/abi/WyvernProxyRegistry.json";
import { CHAIN_ADDRESSES } from "../config/address";
// import { key } from "../../../key";
import { hashOrder, makeOrder } from './utils';
import Web3 from "web3";
import {
    WyvernExchange,
    WyvernExchange__factory,
    WyvernTokenTransferProxy,
    WyvernTokenTransferProxy__factory,
    MockERC721,
    MockERC721__factory,
    WyvernProxyRegistry__factory,
    WyvernProxyRegistry,
    MockERC20,
} from "./typechain-types";
import { ListingDto } from '../dto/listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ListingNFT } from '../entity/wyvern_protocol.entity';
import { Repository } from 'typeorm';
// import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const replacementPatternFrom =
    '0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

const replacementPatternTo =
    '0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000';

let web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/BAexJjh839qZdzF1_CxPlqcd3WRQexU9");
let provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/BAexJjh839qZdzF1_CxPlqcd3WRQexU9");
let nftContract: MockERC721 = new ethers.Contract(CHAIN_ADDRESSES.goerli.MockERC721ContractAddress, nftABI.abi, provider) as MockERC721;
let tokenContract = new ethers.Contract(CHAIN_ADDRESSES.goerli.MockERC20ContractAddress, tokenABI.abi, provider);
let wyvernExchangeContract = new ethers.Contract(CHAIN_ADDRESSES.goerli.ExchangeContractAddress, exchangeABI.abi, provider);
// let walletOwner = new ethers.Wallet(key.owner.privateKey, provider);
// let wallet1 = new ethers.Wallet(key.account1.privateKey, provider);
// let wallet2 = new ethers.Wallet(key.account2.privateKey, provider);

@Injectable()
export class WyvernProtocolService {
    @InjectRepository(ListingNFT)
    private readonly repository: Repository<ListingNFT>

    // async listingAndBuy(tokenId: number): Promise<any> {
    //     // const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));
    //     // let provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/", { name: "binance", chainId: 97});
    //     // "https://eth-goerli.g.alchemy.com/v2/BAexJjh839qZdzF1_CxPlqcd3WRQexU9"
    //     // const accounts = provider.getSigner();

    //     // let walletOwner = new ethers.Wallet(key.owner.privateKey, provider);
    //     // let wallet1 = new ethers.Wallet(key.account1.privateKey, provider);
    //     // let wallet2 = new ethers.Wallet(key.account2.privateKey, provider);

    //     // let gasPrice = await wallet1.getGasPrice();

    //     let overrides = {
    //         gasLimit: 2100000,
    //         gasPrice: 8000000000
    //     };

    //     await nftContract.connect(wallet1).setApprovalForAll(CHAIN_ADDRESSES.goerli.ExchangeContractAddress, true);
    //     await tokenContract.connect(wallet2).approve(CHAIN_ADDRESSES.goerli.TokenTransferProxyContractAddress, 1000);

    //     const buyCalldata1 = nftContract.interface.encodeFunctionData('transferFrom', [
    //         constants.AddressZero,
    //         wallet2.address,
    //         tokenId,
    //     ]);

    //     const sellCaldata1 = nftContract.interface.encodeFunctionData('transferFrom', [
    //         wallet1.address,
    //         constants.AddressZero,
    //         tokenId,
    //     ]);

    //     const buy = makeOrder(
    //         CHAIN_ADDRESSES.goerli.ExchangeContractAddress,
    //         false,
    //         walletOwner.address,
    //         CHAIN_ADDRESSES.goerli.ProxyRegistryContractAddress,
    //         buyCalldata1,
    //         replacementPatternFrom,
    //     );
    //     buy.maker = wallet2.address;
    //     buy.taker = wallet1.address;
    //     buy.target = nftContract.address;
    //     buy.basePrice = 10;
    //     buy.paymentToken = tokenContract.address;
    //     buy.feeMethod = 1;

    //     const sell = makeOrder(
    //         CHAIN_ADDRESSES.goerli.ExchangeContractAddress,
    //         true,
    //         walletOwner.address,
    //         CHAIN_ADDRESSES.goerli.ProxyRegistryContractAddress,
    //         sellCaldata1,
    //         replacementPatternTo,
    //     );
    //     sell.maker = wallet1.address;
    //     sell.taker = constants.AddressZero;
    //     sell.side = 1;
    //     sell.target = nftContract.address;
    //     sell.basePrice = 10;
    //     sell.paymentToken = tokenContract.address;
    //     sell.feeMethod = 1;

    //     const buyHash = hashOrder(buy);
    //     const sellHash = hashOrder(sell);
    //     web3.eth.accounts.wallet.add(wallet2);
    //     const buySig = await web3.eth.sign(buyHash, wallet2.address);
    //     web3.eth.accounts.wallet.add(wallet1);
    //     const sellSig = await web3.eth.sign(sellHash, wallet1.address);
    //     const splitBuySig = ethers.utils.splitSignature(buySig);
    //     const splitSellSig = ethers.utils.splitSignature(sellSig);
    //     let transaction = await
    //         wyvernExchangeContract.connect(wallet2).atomicMatch_(
    //             [
    //                 buy.exchange,
    //                 buy.maker,
    //                 buy.taker,
    //                 buy.feeRecipient,
    //                 buy.target,
    //                 buy.staticTarget,
    //                 buy.paymentToken,
    //                 sell.exchange,
    //                 sell.maker,
    //                 sell.taker,
    //                 sell.feeRecipient,
    //                 sell.target,
    //                 sell.staticTarget,
    //                 sell.paymentToken,
    //             ],
    //             [
    //                 buy.makerRelayerFee,
    //                 buy.takerRelayerFee,
    //                 buy.makerProtocolFee,
    //                 buy.takerProtocolFee,
    //                 buy.basePrice,
    //                 buy.extra,
    //                 buy.listingTime,
    //                 buy.expirationTime,
    //                 buy.salt,
    //                 sell.makerRelayerFee,
    //                 sell.takerRelayerFee,
    //                 sell.makerProtocolFee,
    //                 sell.takerProtocolFee,
    //                 sell.basePrice,
    //                 sell.extra,
    //                 sell.listingTime,
    //                 sell.expirationTime,
    //                 sell.salt,
    //             ],
    //             [
    //                 buy.feeMethod,
    //                 buy.side,
    //                 buy.saleKind,
    //                 buy.howToCall,
    //                 sell.feeMethod,
    //                 sell.side,
    //                 sell.saleKind,
    //                 sell.howToCall,
    //             ],
    //             buy._calldata,
    //             sell._calldata,
    //             buy.replacementPattern,
    //             sell.replacementPattern,
    //             buy.staticExtradata,
    //             sell.staticExtradata,
    //             [splitBuySig.v, splitSellSig.v],
    //             [splitBuySig.r, splitBuySig.s, splitSellSig.r, splitSellSig.s, constants.HashZero],
    //             overrides
    //         );
    //     await transaction.wait();
    //     return transaction;
    // }

    async listing(listingDto: ListingDto): Promise<any> {
        try {
            //     let nftListingContract: MockERC721 = new ethers.Contract(listingDto.target, nftABI.abi, provider) as MockERC721;
            //     // Need to set appoval on FE first
            //     // nftListingContract.connect(wallet1).setApprovalForAll(wyvernExchangeContract.address, true);

            //     const sellCallData = nftListingContract.interface.encodeFunctionData('transferFrom', [
            //         listingDto.makerAddress,
            //         constants.AddressZero,
            //         listingDto.tokenId
            //     ]);

            //     const sell = makeOrder(
            //         wyvernExchangeContract.address,
            //         true,
            //         listingDto.makerAddress,
            //         CHAIN_ADDRESSES.goerli.ProxyRegistryContractAddress,
            //         sellCallData,
            //         replacementPatternTo,
            //     )

            //     sell.maker = listingDto.makerAddress;
            //     sell.taker = constants.AddressZero;
            //     sell.side = 1;
            //     sell.target = listingDto.target;
            //     sell.basePrice = listingDto.basePrice;
            //     sell.paymentToken = tokenContract.address;
            //     sell.listingTime = listingDto.listingTime;
            //     sell.expirationTime = listingDto.expirationTime;
            //     sell.feeMethod = 1;

            //     const sellHash = hashOrder(sell);
            //     // web3.eth.accounts.wallet.add(wallet1);
            //     // FE sign hash and send to BE
            //     const sellSig = await web3.eth.sign(sellHash, listingDto.makerAddress);

            let listingNft: ListingNFT = new ListingNFT();
            listingNft.tokenId = listingDto.tokenId;
            listingNft.target = listingDto.target;
            listingNft.makerAddress = listingDto.makerAddress
            listingNft.takerAddress = listingDto.taker;
            listingNft.feeRecipient = listingDto.feeRecipient;
            listingNft.callData = listingDto._calldata;
            listingNft.paymentToken = listingDto.paymentToken;
            listingNft.basePrice = listingDto.basePrice;
            listingNft.listingTime = listingDto.listingTime;
            listingNft.expirationTime = listingDto.expirationTime;
            listingNft.sellSign = listingDto.sellSig;
            listingNft.salt = listingDto.salt;

            return this.repository.save(listingNft);
        } catch (error) {
            throw new HttpException({
                error,
            }, HttpStatus.FORBIDDEN);
        }
    }

    async buyNft(listingId: number, buyerAddress: string) {
        try {
            // Need to approve token transfer proxy first
            // await tokenContract.connect(wallet2).approve(CHAIN_ADDRESSES.goerli.TokenTransferProxyContractAddress, 1000);

            let overrides = {
                gasLimit: 2100000,
                gasPrice: 8000000000
            };

            const listing = await this.repository.findOneBy({ id: listingId });
            if (!listing) {
                throw new NotFoundException("No listing found for this search");
            }

            let nftListingContract: MockERC721 = new ethers.Contract(listing.target, nftABI.abi, provider) as MockERC721;
            const buyCallData = nftListingContract.interface.encodeFunctionData('transferFrom', [
                constants.AddressZero,
                buyerAddress,
                listing.tokenId
            ]);

            const buy = makeOrder(
                wyvernExchangeContract.address,
                false,
                listing.makerAddress,
                listing.target,
                buyCallData,
                replacementPatternFrom,
            )
            buy.maker = buyerAddress;
            buy.taker = listing.makerAddress;
            buy.target = listing.target;
            buy.basePrice = listing.basePrice;
            buy.paymentToken = tokenContract.address;
            buy.listingTime = listing.listingTime;
            buy.expirationTime = listing.expirationTime;
            buy.feeMethod = 1;

            const buyHash = hashOrder(buy);
            // web3.eth.accounts.wallet.add(wallet2);
            const buySig = await web3.eth.sign(buyHash, buyerAddress);
            const splitBuySig = ethers.utils.splitSignature(buySig);
            const splitSellSig = ethers.utils.splitSignature(listing.sellSign);
            // FE call function
            // let transaction = await
            //     wyvernExchangeContract.connect(wallet2).atomicMatch_(
            //         [
            //             buy.exchange,
            //             buy.maker,
            //             buy.taker,
            //             buy.feeRecipient,
            //             buy.target,
            //             buy.staticTarget,
            //             buy.paymentToken,
            //             wyvernExchangeContract.address,
            //             listing.makerAddress,
            //             listing.takerAddress,
            //             listing.feeRecipient,
            //             listing.target,
            //             '0x0000000000000000000000000000000000000000',
            //             listing.paymentToken,
            //         ],
            //         [
            //             buy.makerRelayerFee,
            //             buy.takerRelayerFee,
            //             buy.makerProtocolFee,
            //             buy.takerProtocolFee,
            //             buy.basePrice,
            //             buy.extra,
            //             buy.listingTime,
            //             buy.expirationTime,
            //             buy.salt,
            //             BigNumber.from(0),
            //             BigNumber.from(0),
            //             BigNumber.from(0),
            //             BigNumber.from(0),
            //             listing.basePrice,
            //             0,
            //             listing.listingTime,
            //             listing.expirationTime,
            //             listing.salt,
            //         ],
            //         [
            //             buy.feeMethod,
            //             buy.side,
            //             buy.saleKind,
            //             buy.howToCall,
            //             1,
            //             1,
            //             0,
            //             0,
            //         ],
            //         buy._calldata,
            //         listing.callData,
            //         buy.replacementPattern,
            //         replacementPatternTo,
            //         buy.staticExtradata,
            //         '0x',
            //         [splitBuySig.v, splitSellSig.v],
            //         [splitBuySig.r, splitBuySig.s, splitSellSig.r, splitSellSig.s, constants.HashZero],
            //         overrides
            //     );
            // await transaction.wait();
            return "Buy NFT successfully";
        } catch (error) {
            throw new HttpException({
                error,
            }, HttpStatus.FORBIDDEN);
        }
    }

    // async mintNewNft(): Promise<any> {
    //     let wallet1 = new ethers.Wallet(key.account1.privateKey, provider);
    //     let nftContract: MockERC721 = new ethers.Contract(CHAIN_ADDRESSES.goerli.MockERC721ContractAddress, nftABI.abi, provider) as MockERC721;

    //     let transaction = await nftContract.connect(wallet1).mint(key.account1.publicKey, "uri");
    //     await transaction.wait();
    //     return transaction;
    // }

    // async mintNewToken(): Promise<any> {
    //     let wallet1 = new ethers.Wallet(key.account1.privateKey, provider);

    //     let transaction = await nftContract.connect(wallet1).mint(wallet1.address, "nft");
    //     await transaction.wait();
    //     return transaction.toString();
    // }
    async getAllList(): Promise<ListingNFT[]> {
        let allList = this.repository.find();
        return allList;
    }

    async checkTokenBalance(address: string): Promise<any> {
        // let tokenContract = new ethers.Contract(CHAIN_ADDRESSES.goerli.MockERC20ContractAddress, tokenABI.abi, provider);
        let transaction = await nftContract.balanceOf(address);
        return transaction.toString();
    }
}
