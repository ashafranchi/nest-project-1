import { ApiProperty } from "@nestjs/swagger";

export class UpdateGroomerDto {
    @ApiProperty()
    overtimeHours: number;

    @ApiProperty()
    starRating: number;

    @ApiProperty()
    daysOff: string[];

    @ApiProperty()
    allergies: string[];
}