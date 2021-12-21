import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, startSession } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type GroomerDocument = Groomer & Document;

export type StarEnum = 1 | 2 | 3 | 4 | 5;

@Schema()
export class Groomer {

    @ApiProperty({
        type: String,
    })
    @Prop()
    groomerName: string;

    @ApiProperty({
        type: String,
    })

    @ApiProperty({
        type: String,
    })
    @Prop()
    email: string;

    @ApiProperty({
        type: Number,
    })
    @Prop()
    overtimeHours: number;

    @ApiProperty({
        enum: [1, 2, 3, 4, 5]
    })
    @Prop()
    starRating: StarEnum;

    @ApiProperty({
        type: Number,
    })
    @Prop()
    age: number;

    @ApiProperty({
        type: [String]
    })
    @Prop([String])
    allergies: string[]

    @ApiProperty({
        type: [String]
    })
    @Prop([String])
    daysOff: string[]
}

export const GroomerSchema = SchemaFactory.createForClass(Groomer);