import { Module } from '@nestjs/common';
import { NftModule } from './nft/nft.module';

@Module({
  imports: [NftModule]
})
export class ApiModule {}
