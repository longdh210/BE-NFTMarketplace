import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingNFT } from '../entity/wyvern_protocol.entity';
import { WyvernProtocolController } from './wyvern_protocol.controller';
import { WyvernProtocolService } from './wyvern_protocol.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListingNFT])],
  controllers: [WyvernProtocolController],
  providers: [WyvernProtocolService]
})
export class WyvernProtocolModule { }
