import { Test } from '@nestjs/testing';
import { PetsRepository } from '../pets.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Pet } from "../schemas/pet.schema";
import { PetModel } from './support/pet.model';
import { petStub } from "./stubs/pet.stub";
import { FilterQuery } from "mongoose";

describe('PetsRepository', () => {
    let petsRepository: PetsRepository;

    describe('find operations', () => {
        let petModel: PetModel;
        let petFilterQuery: FilterQuery<Pet>;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                PetsRepository,
                {
                    provide: getModelToken(Pet.name),
                    useClass: PetModel
                }
            ]
        }).compile();

        petsRepository = moduleRef.get<PetsRepository>(PetsRepository);
        petModel = moduleRef.get<PetModel>(getModelToken(Pet.name));

        petFilterQuery = {
            petId: petStub().petId
        }

        jest.clearAllMocks();
    })

    describe('findOne', () => {
        describe('when findOne is called', () => {
          let pet: Pet;
  
          beforeEach(async () => {
            jest.spyOn(petModel, 'findOne');
            pet = await petsRepository.findOne(petFilterQuery);
          })
  
          test('then it should call the petModel', () => {
            expect(petModel.findOne).toHaveBeenCalledWith(petFilterQuery, { _id: 0, __v: 0 });
          })
  
          test('then it should return a pet', () => {
            expect(pet).toEqual(petStub());
          })
        })
      })
  
      describe('find', () => {
        describe('when find is called', () => {
          let pets: Pet[];
  
          beforeEach(async () => {
            jest.spyOn(petModel, 'find');
            pets = await petsRepository.find(petFilterQuery);
          })
  
          test('then it should call the petModel', () => {
            expect(petModel.find).toHaveBeenCalledWith(petFilterQuery);
          })
  
          test('then it should return a pet', () => {
            expect(pets).toEqual([petStub()]);
          })
        })
      })
  
      describe('findOneAndUpdate', () => {
        describe('when findOneAndUpdate is called', () => {
          let pet: Pet;
  
          beforeEach(async () => {
            jest.spyOn(petModel, 'findOneAndUpdate');
            pet = await petsRepository.findOneAndUpdate(petFilterQuery, petStub());
          })
  
          test('then it should call the petModel', () => {
            expect(petModel.findOneAndUpdate).toHaveBeenCalledWith(petFilterQuery, petStub(), { new: true });
          })
  
          test('then it should return a pet', () => {
            expect(pet).toEqual(petStub());
          })
        })
      })
    })
  
    describe('create operations', () => {
      beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
          providers: [
            PetsRepository,
            {
              provide: getModelToken(Pet.name),
              useValue: PetModel,
            },
          ],
        }).compile();
  
        petsRepository = moduleRef.get<PetsRepository>(PetsRepository);
      });
  
      describe('create', () => {
        describe('when create is called', () => {
          let pet: Pet;
          let saveSpy: jest.SpyInstance;
          let constructorSpy: jest.SpyInstance;
  
          beforeEach(async () => {
            saveSpy = jest.spyOn(PetModel.prototype, 'save');
            constructorSpy = jest.spyOn(PetModel.prototype, 'constructorSpy');
            pet = await petsRepository.create(petStub());
          })
  
          test('then it should call the petModel', () => {
            expect(saveSpy).toHaveBeenCalled();
            expect(constructorSpy).toHaveBeenCalledWith(petStub())
          })
  
          test('then it should return a pet', () => {
            expect(pet).toEqual(petStub());
          })
        })
      })
    })
})