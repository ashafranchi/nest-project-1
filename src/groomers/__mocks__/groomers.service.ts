import { groomerStub } from '../test/stubs/groomer.stub'

export const GroomersService = jest.fn().mockReturnValue({
    getGroomerById: jest.fn().mockResolvedValue(groomerStub()),
    getGroomers: jest.fn().mockResolvedValue([groomerStub()]),
    createGroomer: jest.fn().mockResolvedValue(groomerStub()),
    updateGroomer: jest.fn().mockResolvedValue(groomerStub()),
})