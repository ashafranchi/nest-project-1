import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { Groomer, GroomerSchema } from "./schemas/Groomer.schema"
import { GroomersController } from "./Groomers.controller";
import { GroomersRepository } from "./Groomers.repository";
import { GroomersService } from "./Groomers.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: Groomer.name, schema: GroomerSchema }])],
    controllers: [GroomersController],
    providers: [GroomersService, GroomersRepository]
})

export class GroomersModule {}