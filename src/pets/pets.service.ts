import { Injectable } from "@nestjs/common";
import { UpdatePetDto } from "./dto/update-pet.dto";

import { Pet } from "./schemas/pet.schema";
import { PetsRepository } from "./pets.repository";

@Injectable()
export class PetsService {
    constructor(private readonly petsRepository: PetsRepository) { }

    async getPetById(_id: string): Promise<Pet> {
        return this.petsRepository.findOne({ _id })
    }

    async getPets(): Promise<Pet[]> {
        return this.petsRepository.find({});
    }

    async createPet(ownerEmail: string, dogName: string, rabiesVaccine: boolean, ownerName: string): Promise<Pet> {
        return this.petsRepository.create({
            ownerEmail,
            dogName,
            breed: [],
            rabiesVaccine,
            ownerName
        })
    }

    async updatePet(_id: string, petUpdates: UpdatePetDto): Promise<Pet> {
        return this.petsRepository.findOneAndUpdate({ _id }, petUpdates);
    }
}