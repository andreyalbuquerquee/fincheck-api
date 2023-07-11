import { IsEnum, IsHexColor, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { BankAccountType } from "../entities/bankAccount";

export class CreateBankAccountDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    initialBalance: number;

    @IsNotEmpty()
    @IsEnum(BankAccountType)
    type: BankAccountType;

    @IsNotEmpty()
    @IsString()
    @IsHexColor()
    color: string;

}
