import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NftsForContractController } from "./nfts_for_contract.controller";
import { NftsForContract } from "../entity/nfts_for_contract.entity";
import { NftsForContractService } from "./nfts_for_contract.service";

@Module({
    imports: [TypeOrmModule.forFeature([NftsForContract])],
    controllers: [NftsForContractController],
    providers: [NftsForContractService]
})
export class NftsForContractModule { }