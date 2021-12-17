import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { Pet, PetSchema } from "./schemas/pet.schema"
import { PetsController } from "./pets.controller";
import { PetsRepository } from "./pets.repository";
import { PetsService } from "./pets.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
    controllers: [PetsController],
    providers: [PetsService, PetsRepository]
})

export class PetsModule {}