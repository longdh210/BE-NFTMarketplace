import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NftsForOwner } from './nfts_for_owner.entity';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';

@Module({
  imports: [TypeOrmModule.forFeature([NftsForOwner])],
  controllers: [NftController],
  providers: [NftService]
})
export class NftModule { }
