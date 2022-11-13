// import { ApiProperty } from '@nestjs/swagger';
import { NftsForOwnerM } from '../domain/model/nfts_for_owner';

export class NftsForOwnerPresenter {
    //   @ApiProperty()
    address: string;
    //   @ApiProperty()
    ownedNfts: [];
    //   @ApiProperty()
    pageKey: string;
    //   @ApiProperty()
    totalCount: number;

    constructor(nftsForOwner: NftsForOwnerM) {
        this.address = nftsForOwner.address;
        this.ownedNfts = nftsForOwner.ownedNfts;
        this.pageKey = nftsForOwner.pageKey;
        this.totalCount = nftsForOwner.totalCount;
    }
}