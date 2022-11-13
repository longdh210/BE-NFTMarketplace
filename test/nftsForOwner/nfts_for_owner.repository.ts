import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NftsForOwnerM } from '../domain/model/nfts_for_owner';
import { NftsForOwnerRepository } from '../domain/repositories/nfts_for_owner_repository.interface';
import { NftsForOwner } from './nfts_for_owner.entity';

@Injectable()
export class DatabaseNftsForOwnerRepository implements NftsForOwnerRepository {
    constructor(
        @InjectRepository(NftsForOwner)
        private readonly nftsForOwnerEntityRepository: Repository<NftsForOwner>,
    ) { }

    //   async updateContent(id: number, isDone: boolean): Promise<void> {
    //     await this.todoEntityRepository.update(
    //       {
    //         id: id,
    //       },
    //       { isDone: isDone },
    //     );
    //   }
    async insert(nftsForOwner: NftsForOwnerM): Promise<any> {
        const nftsForOwnerEntity = this.toNftsForOwnerEntity(nftsForOwner);
        await this.nftsForOwnerEntityRepository.insert(nftsForOwnerEntity);
    }
    async findAll(): Promise<NftsForOwnerM[]> {
        const nftsForOwnersEntity = await this.nftsForOwnerEntityRepository.find();
        return nftsForOwnersEntity.map((nftsForOwnerEntity) => this.toNftsForOwner(nftsForOwnerEntity));
    }
    async findByAddress(address: string): Promise<NftsForOwnerM> {
        const nftsForOwnerEntity = await this.nftsForOwnerEntityRepository.findOneOrFail({ where: { address: address } });
        return this.toNftsForOwner(nftsForOwnerEntity);
    }
    //   async deleteById(id: number): Promise<void> {
    //     await this.todoEntityRepository.delete({ id: id });
    //   }

    private toNftsForOwner(nftsForOwnerEntity: NftsForOwner): NftsForOwnerM {
        const nftsForOwner: NftsForOwnerM = new NftsForOwnerM();

        nftsForOwner.address = nftsForOwnerEntity.address;
        nftsForOwner.ownedNfts = nftsForOwnerEntity.ownedNfts;
        nftsForOwner.pageKey = nftsForOwnerEntity.pageKey;
        nftsForOwner.totalCount = nftsForOwnerEntity.totalCount;

        return nftsForOwner;
    }

    private toNftsForOwnerEntity(nftsForOwner: NftsForOwnerM): NftsForOwner {
        const nftsForOwnerEntity: NftsForOwner = new NftsForOwner();

        nftsForOwner.address = nftsForOwner.address;
        nftsForOwner.ownedNfts = nftsForOwner.ownedNfts;
        nftsForOwner.pageKey = nftsForOwner.pageKey;
        nftsForOwner.totalCount = nftsForOwner.totalCount;

        return nftsForOwnerEntity;
    }
}