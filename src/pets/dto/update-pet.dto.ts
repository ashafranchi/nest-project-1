import { ApiProperty } from "@nestjs/swagger";

export class UpdatePetDto {
    @ApiProperty()
    breed: string[];

    @ApiProperty()
    age: number;
}