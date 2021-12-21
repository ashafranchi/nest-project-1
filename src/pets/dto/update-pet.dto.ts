import { ApiProperty } from "@nestjs/swagger";

export class UpdatePetDto {
    @ApiProperty({ type: [String] })
    breed: string[];

    @ApiProperty({
        type: Number,
    })
    age: number;
}