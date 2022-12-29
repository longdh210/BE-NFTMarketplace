import { Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { NftsForContract } from "../entity/nfts_for_contract.entity";
import { NftsForContractService } from "./nfts_for_contract.service";

@Controller('/api/v1/contract')
export class NftsForContractController {
    @Inject(NftsForContractService)
    private readonly service: NftsForContractService;

    @Get(':address')
    public getNftsForOwner(@Param('address') address: string): Promise<NftsForContract> {
        return this.service.getNftsForContract(address);
    }

    @Get()
    public getAllCollections(): Promise<NftsForContract[]> {
        return this.service.getAllContracts();
    }

    @Post(':address')
    public createNftsForContract(@Param('address') address: string): Promise<NftsForContract> {
        return this.service.createNftsForContract(address);
    }
}