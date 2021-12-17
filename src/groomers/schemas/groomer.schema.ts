import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type GroomerDocument = Groomer & Document;

@Schema()
export class Groomer {
    @Prop()
    groomerId: string;

    @Prop()
    groomerName: string;

    @Prop()
    email: string;

    @Prop()
    overtimeHours: number;

    @Prop()
    starRating: number;

    @Prop()
    age: number;

    @Prop([String])
    allergies: string[]

    @Prop([String])
    daysOff: string[]
}

export const GroomerSchema = SchemaFactory.createForClass(Groomer);