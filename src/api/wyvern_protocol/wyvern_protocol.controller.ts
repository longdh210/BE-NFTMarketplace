import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ListingDto } from "../dto/listing.dto";
import { ListingNFT } from "../entity/wyvern_protocol.entity";
import { WyvernProtocolService } from "./wyvern_protocol.service";

@Controller('/api/v1/marketplace')
export class WyvernProtocolController {
    constructor(private readonly wyvernProtocolService: WyvernProtocolService) { }

    // @Post("/listingandbuy/:tokenid")
    // listingAndBuy(@Param('tokenid') tokenId: number): any {
    //     return this.wyvernProtocolService.listingAndBuy(tokenId);
    // }

    @Post("/listing")
    listing(@Body() listingDto: ListingDto): any {
        return this.wyvernProtocolService.listing(listingDto);
    }

    @Post("/buy/:listingId/:buyerAddress")
    buyNft(@Param('listingId') listingId: number, @Param('buyerAddress') buyerAddress: string): any {
        return this.wyvernProtocolService.buyNft(listingId, buyerAddress);
    }

    @Post("/delete/:tokenId/:contractAddress")
    deleteListing(@Param('tokenId') tokenId: number, @Param('contractAddress') contractAddress: string): any {
        return this.wyvernProtocolService.deleteNft(tokenId, contractAddress);
    }

    // @Post("/mintnft")
    // mintNewNft(): any {
    //     return this.wyvernProtocolService.mintNewNft();
    // }

    // @Post("/minttoken")
    // mintNewToken(): any {
    //     return this.wyvernProtocolService.mintNewToken();
    // }
    @Get("/listing")
    getAllList(): Promise<ListingNFT[]> {
        return this.wyvernProtocolService.getAllList();
    }

    @Get("/balance/:address")
    getBalance(@Param('address') address: string): any {
        return this.wyvernProtocolService.checkTokenBalance(address);
    }
}