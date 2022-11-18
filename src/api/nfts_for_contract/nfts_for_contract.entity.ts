import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class NftsForContract {
    @PrimaryColumn()
    address: string;

    @Column({
        type: 'json',
    })
    nfts

    @Column({ nullable: true })
    pageKey: string;
}