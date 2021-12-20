import { Test } from "@nestjs/testing"
import { CreateGroomerDto } from "../dto/create-groomer.dto";
import { UpdateGroomerDto } from "../dto/update-groomer.dto";
import { Groomer } from "../schemas/groomer.schema";

import { GroomersController } from "../groomers.controller"
import { GroomersService } from "../groomers.service"
import { groomerStub } from "./stubs/groomer.stub";

jest.mock('../groomers.service');

describe('GroomersController', () => {
  let groomersController: GroomersController;
  let groomersService: GroomersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [GroomersController],
      providers: [GroomersService]
    }).compile();

    groomersController = moduleRef.get<GroomersController>(GroomersController);
    groomersService = moduleRef.get<GroomersService>(GroomersService);
    jest.clearAllMocks();
  })

  describe('getGroomer', () => {
    describe('when getGroomer is called', () => {
      let groomer: Groomer;

      beforeEach(async () => {
        groomer = await groomersController.getGroomer(groomerStub().groomerName)
      })

      test('then it should call groomersService', () => {
        expect(groomersService.getGroomerById).toBeCalledWith(groomerStub().groomerName);
      })

      test('then is should return a groomer', () => {
        expect(groomer).toEqual(groomerStub());
      })
    })
  })

  describe('getGroomers', () => {
    describe('when getGroomers is called', () => {
      let groomers: Groomer[];

      beforeEach(async () => {
        groomers = await groomersController.getGroomers();
      })

      test('then it should call groomersService', () => {
        expect(groomersService.getGroomers).toHaveBeenCalled();
      })

      test('then it should return groomers', () => {
        expect(groomers).toEqual([groomerStub()])
      })
    })
  })

  describe('createGroomer', () => {
    describe('when createGroomer is called', () => {
      let groomer: Groomer;
      let createGroomerDto: CreateGroomerDto

      beforeEach(async () => {
        createGroomerDto = {
          groomerName: groomerStub().groomerName,
          email: groomerStub().email,
          age: groomerStub().age
        }
        groomer = await groomersController.createGroomer(createGroomerDto);
      })

      test('then it should call groomersService', () => {
        expect(groomersService.createGroomer).toHaveBeenCalledWith(createGroomerDto.groomerName, createGroomerDto.email, createGroomerDto.age);
      })

      test('then it should return a groomer', () => {
        expect(groomer).toEqual(groomerStub())
      })
    })
  })

  describe('updateGroomer', () => {
    describe('when updateGroomer is called', () => {
      let groomer: Groomer;
      let updateGroomerDto: UpdateGroomerDto;

      beforeEach(async () => {
        updateGroomerDto = {
          starRating: 3.5,
          overtimeHours: 0,
          daysOff: ["Sunday", "Monday"],
          allergies: ['Pollen']
        }
        groomer = await groomersController.updateGroomer(groomerStub().groomerName, updateGroomerDto);
      })

      test('then it should call groomersService', () => {
        expect(groomersService.updateGroomer).toHaveBeenCalledWith(groomerStub().groomerName, updateGroomerDto);
      })

      test('then it should return a groomer', () => {
        expect(groomer).toEqual(groomerStub())
      })
    })
  })
})