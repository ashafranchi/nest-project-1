import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {
    @ApiProperty()
    ownerEmail: string;

    @ApiProperty()
    ownerName: string;

    @ApiProperty()
    dogName: string;

    @ApiProperty()
    rabiesVaccine: boolean;
}