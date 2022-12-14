import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { NftsForOwnerDto } from '../dto/nfts_for_owner.dto';
import { NftsForOwner } from '../entity/nfts_for_owner.entity';
import { NftsForOwnerService } from './nfts_for_owner.service';

@Controller('/api/v1/owner')
export class NftsForOwnerController {
    @Inject(NftsForOwnerService)
    private readonly service: NftsForOwnerService;

    @Get(':address')
    public getNftsForOwner(@Param('address') address: string): Promise<NftsForOwner> {
        return this.service.getNftsForOwner(address);
    }

    @Post(':address')
    public createNftsForOwner(@Param('address') address: string): Promise<NftsForOwner> {
        return this.service.createNftsForOwner(address);
    }
}
