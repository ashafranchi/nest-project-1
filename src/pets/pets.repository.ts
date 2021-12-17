import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "../database/entity.repository";

import { Pet, PetDocument } from "./schemas/pet.schema";

@Injectable()
export class PetsRepository extends EntityRepository<PetDocument> {
    constructor(@InjectModel(Pet.name) petModel: Model<PetDocument>) {
      super(petModel)
    }
}