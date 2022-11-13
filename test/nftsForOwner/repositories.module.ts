import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../infrastructure/config/typeorm/typeorm.module';
import { NftsForOwner } from './nfts_for_owner.entity';
import { DatabaseNftsForOwnerRepository } from './nfts_for_owner.repository';

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([NftsForOwner])],
    providers: [DatabaseNftsForOwnerRepository],
    exports: [DatabaseNftsForOwnerRepository],
})
export class RepositoriesModule { }