import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

    @Prop()
    ownerName: string;

    @Prop()
    ownerEmail: string;

    @Prop()
    dogName: string;

    @Prop()
    rabiesVaccine: boolean;

    @Prop()
    age: number;

    @Prop([String])
    breed: string[]
}

export const PetSchema = SchemaFactory.createForClass(Pet);