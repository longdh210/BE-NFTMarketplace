import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Network, Alchemy } from 'alchemy-sdk';
import { NftsForOwner } from '../entity/nfts_for_owner.entity';
import { NftsForOwnerDto } from '../dto/nfts_for_owner.dto';

@Injectable()
export class NftsForOwnerService {
    @InjectRepository(NftsForOwner)
    private readonly repository: Repository<NftsForOwner>;

    public async getNftsForOwner(address: string): Promise<NftsForOwner> {
        const owner = await this.repository.findOneBy({ address: address })
        if (!owner) {
            return this.createNftsForOwner(address);
        }
        if (owner.totalCount == 0) {
            throw new NotFoundException("No items found for this search");
        }
        return owner;
    }

    async callAPI(address: string): Promise<any> {
        const settings = {
            apiKey: "BAexJjh839qZdzF1_CxPlqcd3WRQexU9", // Replace with your Alchemy API Key.
            network: Network.ETH_GOERLI, // Replace with your network.
        };

        const alchemy = new Alchemy(settings);

        // Print all NFTs returned in the response:
        return await alchemy.nft
            .getNftsForOwner(address)

    }

    public async createNftsForOwner(address: string): Promise<NftsForOwner> {
        const dataFromAPI = await this.callAPI(address);
        const nftsForOwner: NftsForOwner = new NftsForOwner();

        if (dataFromAPI.totalCount >= 0) {
            nftsForOwner.address = address;
            nftsForOwner.ownedNfts = dataFromAPI.ownedNfts;
            nftsForOwner.pageKey = dataFromAPI.pageKey;
            nftsForOwner.totalCount = dataFromAPI.totalCount;

            return this.repository.save(nftsForOwner);
        }
        throw new NotFoundException("No items found for this search");
    }
}
