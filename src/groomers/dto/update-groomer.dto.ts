import { ApiProperty } from "@nestjs/swagger";
import { StarEnum } from '../schemas/groomer.schema';

export class UpdateGroomerDto {
    @ApiProperty({
        type: Number,
    })
    overtimeHours: number;

    @ApiProperty({
        enum: [1, 2, 3, 4, 5]
    })
    starRating: StarEnum;

    @ApiProperty({ type: [String] })
    daysOff: string[];

    @ApiProperty({ type: [String] })
    allergies: string[];
}