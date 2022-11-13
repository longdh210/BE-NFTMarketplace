import { NftsForOwnerM } from '../domain/model/nfts_for_owner';
import { NftsForOwnerRepository } from '../domain/repositories/nfts_for_owner_repository.interface';

export class getNftsForOwnerUseCases {
    constructor(private readonly nftsForOwnerRepository: NftsForOwnerRepository) { }

    async execute(): Promise<NftsForOwnerM[]> {
        return await this.nftsForOwnerRepository.findAll();
    }
}