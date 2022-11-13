// import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NftsForOwnerDto {
    @IsNotEmpty()
    @IsString()
    readonly address: string;


    @IsNotEmpty()
    @IsString()
    readonly ownedNfts;

    @IsNotEmpty()
    readonly pageKey: string;

    @IsNotEmpty()
    @IsNumber()
    readonly totalCount: number;
}