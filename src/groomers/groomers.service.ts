import { Inject, Injectable } from "@nestjs/common";
import { UpdateGroomerDto } from "./dto/update-groomer.dto";

import { Groomer } from "./schemas/groomer.schema";
import { GroomersRepository } from "./groomers.repository";

@Injectable()
export class GroomersService {
    constructor(
        @Inject(GroomersRepository)
        private readonly groomersRepository: GroomersRepository) { }

    async getGroomerById(_id: string): Promise<Groomer> {
        return this.groomersRepository.findOne({ _id })
    }

    async getGroomers(): Promise<Groomer[]> {
        return this.groomersRepository.find({});
    }

    async createGroomer(groomerName: string, email: string, age: number): Promise<Groomer> {
        return this.groomersRepository.create({
            groomerName,
            email,
            age
        })
    }

    async updateGroomer(_id: string, groomerUpdates: UpdateGroomerDto): Promise<Groomer> {
        return this.groomersRepository.findOneAndUpdate({ _id }, groomerUpdates);
    }
}