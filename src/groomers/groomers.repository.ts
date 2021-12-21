import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";

import { Groomer, GroomerDocument } from "./schemas/Groomer.schema";

@Injectable()
export class GroomersRepository extends EntityRepository<GroomerDocument> {
  constructor(@InjectModel(Groomer.name) groomerModel: Model<GroomerDocument>) {
    super(groomerModel)
  }
}