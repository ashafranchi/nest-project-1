import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdatePetDto } from "./dto/update-pet.dto";

import { Pet } from "./schemas/pet.schema";
import { PetsRepository } from "./pets.repository";

@Injectable()
export class PetsService {
    constructor(private readonly petsRepository: PetsRepository) {}

    async getPetById(groomerId: string): Promise<Pet> {
        return this.petsRepository.findOne({ groomerId })
    }

    async getPets(): Promise<Pet[]> {
        return this.petsRepository.find({});
    }

    async createPet(ownerEmail: string, dogName: string, rabiesVaccine: boolean, ownerName: string): Promise<Pet> {
        return this.petsRepository.create({
            groomerId: uuidv4(),
            ownerEmail,
            dogName,
            breed: [],
            rabiesVaccine,
            ownerName
        })
    }

    async updatePet(groomerId: string, petUpdates: UpdatePetDto): Promise<Pet> {
        return this.petsRepository.findOneAndUpdate({ groomerId }, petUpdates);
    }
}