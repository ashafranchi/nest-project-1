import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
    @Prop()
    userId: string;

    @Prop()
    name: string;

    @Prop()
    vaccinated: boolean;

    @Prop()
    age: number;

    @Prop([String])
    breed: string[]
}

export const UserSchema = SchemaFactory.createForClass(Pet);