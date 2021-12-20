import { MockModel } from "../../../database/test/support/mock.model";
import { Pet } from "../../schemas/pet.schema";
import { petStub } from "../stubs/pet.stub";

export class PetModel extends MockModel<Pet> {
    protected entityStub = petStub()
}