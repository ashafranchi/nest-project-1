import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {
    @ApiProperty({
        type: String,
    })
    ownerEmail: string;

    @ApiProperty({
        type: String,
    })
    ownerName: string;

    @ApiProperty({
        type: String,
    })
    dogName: string;

    @ApiProperty({
        type: Boolean,
    })
    rabiesVaccine: boolean;
}