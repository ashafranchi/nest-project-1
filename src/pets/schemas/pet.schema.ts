import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

    @ApiProperty({
        type: String,
    })
    @Prop()
    ownerName: string;

    @ApiProperty({
        type: String,
    })
    @Prop()
    ownerEmail: string;

    @ApiProperty({
        type: String,
    })
    @Prop()
    dogName: string;

    @ApiProperty({
        type: Boolean,
    })
    @Prop()
    rabiesVaccine: boolean;

    @ApiProperty({
        type: Number,
    })
    @Prop()
    age: number;

    @ApiProperty({
        type: [String]
    })
    @Prop([String])
    breed: string[]
}

export const PetSchema = SchemaFactory.createForClass(Pet);