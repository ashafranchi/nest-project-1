import { ApiProperty } from "@nestjs/swagger";

export class UpdateGroomerDto {
    @ApiProperty({
        type: Number,
    })
    overtimeHours: number;

    @ApiProperty({
        type: Number,
    })
    starRating: number;

    @ApiProperty({ type: [String] })
    daysOff: string[];

    @ApiProperty({ type: [String] })
    allergies: string[];
}