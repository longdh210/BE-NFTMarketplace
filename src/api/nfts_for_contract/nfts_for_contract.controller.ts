import { Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { NftsForContract } from "./nfts_for_contract.entity";
import { NftsForContractService } from "./nfts_for_contract.service";

@Controller('contract')
export class NftsForContractController {
    @Inject(NftsForContractService)
    private readonly service: NftsForContractService;

    @Get(':address')
    public getNftsForOwner(@Param('address') address: string): Promise<NftsForContract> {
        return this.service.getNftsForContract(address);
    }

    @Post(':address')
    public createNftsForContract(@Param('address') address: string): Promise<NftsForContract> {
        return this.service.createNftsForContract(address);
    }
}