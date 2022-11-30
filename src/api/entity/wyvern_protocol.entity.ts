import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ListingNFT {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tokenId: number;

    @Column()
    target: string;

    @Column()
    makerAddress: string;

    @Column()
    takerAddress: string;

    @Column()
    feeRecipient: string;

    @Column()
    callData: string;

    @Column()
    basePrice: number;

    @Column()
    paymentToken: string;

    @Column()
    listingTime: number;

    @Column()
    expirationTime: number;

    @Column()
    sellHash: string;

    @Column()
    salt: number;
}