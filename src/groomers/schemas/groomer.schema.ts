import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type GroomerDocument = Groomer & Document;

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
        type: Number,
    })
    @Prop()
    starRating: number;

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