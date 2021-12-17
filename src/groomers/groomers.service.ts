import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateGroomerDto } from "./dto/update-Groomer.dto";

import { Groomer } from "./schemas/Groomer.schema";
import { GroomersRepository } from "./Groomers.repository";

@Injectable()
export class GroomersService {
    constructor(private readonly groomersRepository: GroomersRepository) {}

    async getGroomerById(groomerId: string): Promise<Groomer> {
        return this.groomersRepository.findOne({ groomerId })
    }

    async getGroomers(): Promise<Groomer[]> {
        return this.groomersRepository.find({});
    }

    async createGroomer(groomerName: string, email: string, age: number): Promise<Groomer> {
        return this.groomersRepository.create({
            groomerId: uuidv4(),
            groomerName,
            email,
            age
        })
    }

    async updateGroomer(groomerId: string, groomerUpdates: UpdateGroomerDto): Promise<Groomer> {
        return this.groomersRepository.findOneAndUpdate({ groomerId }, groomerUpdates);
    }
}