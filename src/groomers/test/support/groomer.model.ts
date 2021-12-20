import { MockModel } from "../../../database/test/support/mock.model";
import { Groomer } from "../../schemas/groomer.schema";
import { groomerStub } from "../stubs/groomer.stub";

export class GroomerModel extends MockModel<Groomer> {
    protected entityStub = groomerStub()
}