// import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateNftsForOwnerDto {
    // @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
    // @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;
}

export class AddNftsForOwnerDto {
    // @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    readonly ownedNfts: [];

    @IsNotEmpty()
    @IsNumber()
    readonly totalCount: number;
}