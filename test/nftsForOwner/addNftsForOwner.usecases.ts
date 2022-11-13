import { ILogger } from '../domain/logger/logger.interface';
import { NftsForOwnerM } from '../domain/model/nfts_for_owner';
import { NftsForOwnerRepository } from '../domain/repositories/nfts_for_owner_repository.interface';
import { Network, Alchemy } from 'alchemy-sdk';

export class addNftsForOwnerUseCases {
    constructor(private readonly logger: ILogger, private readonly nftsForOwnerRepository: NftsForOwnerRepository) { }

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

    async execute(address: string): Promise<NftsForOwnerM> {
        const objectFromAPI = await this.callAPI(address);

        const nftsForOwner = new NftsForOwnerM();
        nftsForOwner.address = address;
        nftsForOwner.ownedNfts = objectFromAPI.ownedNfts;
        nftsForOwner.pageKey = objectFromAPI.pageKey;
        nftsForOwner.totalCount = objectFromAPI.totalCount;

        const result = await this.nftsForOwnerRepository.insert(nftsForOwner);
        this.logger.log('addTodoUseCases execute', 'New todo have been inserted');
        return result;
    }
}