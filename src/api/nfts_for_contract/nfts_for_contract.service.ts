import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Alchemy, Network } from "alchemy-sdk";
import { Repository } from "typeorm";
import { NftsForContract } from "../entity/nfts_for_contract.entity";

@Injectable()
export class NftsForContractService {
    @InjectRepository(NftsForContract)
    private readonly repository: Repository<NftsForContract>;

    public async getNftsForContract(address: string): Promise<NftsForContract> {
        const contract = await this.repository.findOneBy({ address: address });
        if (!contract) {
            return this.createNftsForContract(address);
        }
        console.log(contract);
        if (Object.keys(contract).length === 0) {
            console.log("run");
            throw new ForbiddenException("No items found for this search");
        }
        return contract;
    }

    async callAPI(address: string): Promise<any> {
        const settings = {
            apiKey: "BAexJjh839qZdzF1_CxPlqcd3WRQexU9", // Replace with your Alchemy API Key.
            network: Network.ETH_GOERLI, // Replace with your network.
        };

        const alchemy = new Alchemy(settings);

        // Print all NFTs returned in the response:
        return await alchemy.nft
            .getNftsForContract(address)

    }

    public async createNftsForContract(address: string): Promise<NftsForContract> {
        const dataFromAPI = await this.callAPI(address);
        console.log(dataFromAPI);
        if (Object.keys(dataFromAPI).length === 0) {
            throw new NotFoundException("No items found for this search");
        }
        const nftsForContract: NftsForContract = new NftsForContract();

        nftsForContract.address = address;
        nftsForContract.nfts = dataFromAPI.nfts;
        nftsForContract.pageKey = dataFromAPI.pageKey;

        return this.repository.save(nftsForContract);
    }
}