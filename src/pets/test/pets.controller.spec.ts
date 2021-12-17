import { Test } from "@nestjs/testing"
import { CreatePetDto } from "../dto/create-pet.dto";
import { UpdatePetDto } from "../dto/update-pet.dto";
import { Pet } from "../schemas/pet.schema";

import { PetsController } from "../pets.controller"
import { PetsService } from "../pets.service"
import { petStub } from "./stubs/pet.stub";

jest.mock('../pets.service');

describe('PetsController', () => {
  let petsController: PetsController;
  let petsService: PetsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [PetsController],
      providers: [PetsService]
    }).compile();

    petsController = moduleRef.get<PetsController>(PetsController);
    petsService = moduleRef.get<PetsService>(PetsService);
    jest.clearAllMocks();
  })

  describe('getPet', () => {
    describe('when getPet is called', () => {
      let pet: Pet;

      beforeEach(async () => {
        pet = await petsController.getPet(petStub().petId)  
      })

      test('then it should call petsService', () => {
        expect(petsService.getPetById).toBeCalledWith(petStub().petId);
      })

      test('then is should return a pet', () => {
        expect(pet).toEqual(petStub());
      })
    })
  })

  describe('getPets', () => {
    describe('when getPets is called', () => {
      let pets: Pet[];

      beforeEach(async () => {
        pets = await petsController.getPets();
      })

      test('then it should call petsService', () => {
        expect(petsService.getPets).toHaveBeenCalled();
      })

      test('then it should return pets', () => {
        expect(pets).toEqual([petStub()])
      })
    })
  })

  describe('createPet', () => {
    describe('when createPet is called', () => {
      let pet: Pet;
      let createPetDto: CreatePetDto

      beforeEach(async () => {
        createPetDto = {
          ownerEmail: petStub().ownerEmail,
          ownerName: petStub().ownerName,
          dogName: petStub().dogName,
          rabiesVaccine: petStub().rabiesVaccine
        }
        pet = await petsController.createPet(createPetDto);
      })

      test('then it should call petsService', () => {
        expect(petsService.createPet).toHaveBeenCalledWith(createPetDto.ownerEmail, createPetDto.dogName);
      })

      test('then it should return a pet', () => {
        expect(pet).toEqual(petStub())
      })
    })
  })

  describe('updatePet', () => {
    describe('when updatePet is called', () => {
      let pet: Pet;
      let updatePetDto: UpdatePetDto;

      beforeEach(async () => {
        updatePetDto = {
          age: 21,
          breed: ["Border Collie", "Novia Scotia Duck Tolling Retriever"]
        }
        pet = await petsController.updatePet(petStub().petId, updatePetDto);
      })

      test('then it should call petsService', () => {
        expect(petsService.updatePet).toHaveBeenCalledWith(petStub().petId, updatePetDto);
      })

      test('then it should return a pet', () => {
        expect(pet).toEqual(petStub())
      })
    })
  })
})