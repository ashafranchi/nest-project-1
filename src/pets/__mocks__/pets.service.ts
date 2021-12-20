import { petStub } from '../test/stubs/pet.stub'

export const PetsService = jest.fn().mockReturnValue({
    getPetById: jest.fn().mockResolvedValue(petStub()),
    getPets: jest.fn().mockResolvedValue([petStub()]),
    createPet: jest.fn().mockResolvedValue(petStub()),
    updatePet: jest.fn().mockResolvedValue(petStub()),
})