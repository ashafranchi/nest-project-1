import { ApiProperty } from "@nestjs/swagger";

export class CreateGroomerDto {
    @ApiProperty({
        type: String,
    })
    groomerName: string;

    @ApiProperty({
        type: String,
    })
    email: string;

    @ApiProperty({
        type: Number,
    })
    age: number;
}