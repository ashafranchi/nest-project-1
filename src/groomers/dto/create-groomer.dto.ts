import { ApiProperty } from "@nestjs/swagger";

export class CreateGroomerDto {
    @ApiProperty()
    groomerName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    age: number;
}