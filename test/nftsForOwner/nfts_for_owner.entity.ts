import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class NftsForOwner {
  @PrimaryGeneratedColumn()
  address: string;

  @Column()
  ownedNfts: [];

  @Column()
  pageKey: string;

  @Column()
  totalCount: number;
}