import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class NftsForOwner {
    @PrimaryColumn()
    address: string;

    @Column({
        type: 'json',
    })
    ownedNfts;

    @Column({ nullable: true })
    pageKey: string;

    @Column()
    totalCount: number;
}