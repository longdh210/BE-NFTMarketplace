import { Module } from '@nestjs/common';
import { NftsForOwnerModule } from './nfts_for_owner/nfts_for_owner.module';
import { NftsForContractModule } from './nfts_for_contract/nfts_for_contract_module';

@Module({
  imports: [NftsForOwnerModule, NftsForContractModule]
})
export class ApiModule { }
