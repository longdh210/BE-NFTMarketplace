import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NftsForOwner } from './nfts_for_owner.entity';
import { NftsForOwnerController } from './nfts_for_owner.controller';
import { NftsForOwnerService } from './nfts_for_owner.service';

@Module({
  imports: [TypeOrmModule.forFeature([NftsForOwner])],
  controllers: [NftsForOwnerController],
  providers: [NftsForOwnerService]
})
export class NftsForOwnerModule { }
