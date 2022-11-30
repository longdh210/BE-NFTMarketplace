import { IsNotEmpty, IsString } from "class-validator";

export class ListingDto {
    @IsNotEmpty()
    makerAddress: string;

    @IsNotEmpty()
    tokenId: number;

    @IsNotEmpty()
    target: string;

    @IsNotEmpty()
    basePrice: number;

    @IsNotEmpty()
    paymentToken: string;

    @IsNotEmpty()
    listingTime: number;

    @IsNotEmpty()
    expirationTime: number;
}