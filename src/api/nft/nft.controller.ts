import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { NftsForOwnerDto } from './nfts_for_owner.dto';
import { NftsForOwner } from './nfts_for_owner.entity';
import { NftService } from './nft.service';

@Controller('owner')
export class NftController {
    @Inject(NftService)
    private readonly service: NftService;

    @Get(':address')
    public getUser(@Param('address') address: string): Promise<NftsForOwner> {
        return this.service.getOwner(address);
    }

    @Post(':address')
    public createUser(@Param('address') address: string): Promise<NftsForOwner> {
        return this.service.createOwner(address);
    }
}
