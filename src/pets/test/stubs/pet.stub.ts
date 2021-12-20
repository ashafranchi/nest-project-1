import { Pet } from "../../schemas/pet.schema";

export const petStub = (): Pet => {
    return {
        ownerEmail: 'test@example. com',
        age: 7,
        dogName: 'Maximus',
        ownerName: 'Asha',
        rabiesVaccine: true,
        breed: ['Golden Retriever']
    }
}