import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Network, Alchemy } from 'alchemy-sdk';
import { NftsForOwner } from './nfts_for_owner.entity';
import { NftsForOwnerDto } from './nfts_for_owner.dto';

@Injectable()
export class NftService {
    @InjectRepository(NftsForOwner)
    private readonly repository: Repository<NftsForOwner>;

    public async getOwner(address: string): Promise<NftsForOwner> {
        const owner = await this.repository.findOneBy({ address: address })
        if (!owner) {
            return this.createOwner(address);
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

    public async createOwner(address: string): Promise<NftsForOwner> {
        const objectFromAPI = await this.callAPI(address);
        const nftsForOwner: NftsForOwner = new NftsForOwner();

        nftsForOwner.address = address;
        nftsForOwner.ownedNfts = objectFromAPI.ownedNfts;
        nftsForOwner.pageKey = objectFromAPI.pageKey;
        nftsForOwner.totalCount = objectFromAPI.totalCount;

        return this.repository.save(nftsForOwner);
    }
}
