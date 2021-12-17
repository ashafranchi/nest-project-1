import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { Groomer, GroomerSchema } from "./schemas/groomer.schema"
import { GroomersController } from "./groomers.controller";
import { GroomersRepository } from "./groomers.repository";
import { GroomersService } from "./groomers.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: Groomer.name, schema: GroomerSchema }])],
    controllers: [GroomersController],
    providers: [GroomersService, GroomersRepository]
})

export class GroomersModule {}