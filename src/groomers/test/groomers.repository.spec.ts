import { Test } from '@nestjs/testing';
import { GroomersRepository } from '../groomers.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Groomer } from "../schemas/groomer.schema";
import { GroomerModel } from './support/groomer.model';
import { groomerStub } from "./stubs/groomer.stub";
import { FilterQuery } from "mongoose";

describe('GroomersRepository', () => {
  let groomersRepository: GroomersRepository;

  describe('find operations', () => {
    let groomerModel: GroomerModel;
    let groomerFilterQuery: FilterQuery<Groomer>;

    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          GroomersRepository,
          {
            provide: getModelToken(Groomer.name),
            useClass: GroomerModel
          }
        ]
      }).compile();

      groomersRepository = moduleRef.get<GroomersRepository>(GroomersRepository);
      groomerModel = moduleRef.get<GroomerModel>(getModelToken(Groomer.name));

      groomerFilterQuery = {
        groomerName: groomerStub().groomerName
      }

      jest.clearAllMocks();
    })

    describe('findOne', () => {
      describe('when findOne is called', () => {
        let groomer: Groomer;

        beforeEach(async () => {
          jest.spyOn(groomerModel, 'findOne');
          groomer = await groomersRepository.findOne(groomerFilterQuery);
        })

        test('then it should call the groomerModel', () => {
          expect(groomerModel.findOne).toHaveBeenCalledWith(groomerFilterQuery, { _id: 0, __v: 0 });
        })

        test('then it should return a groomer', () => {
          expect(groomer).toEqual(groomerStub());
        })
      })
    })

    describe('find', () => {
      describe('when find is called', () => {
        let groomers: Groomer[];

        beforeEach(async () => {
          jest.spyOn(groomerModel, 'find');
          groomers = await groomersRepository.find(groomerFilterQuery);
        })

        test('then it should call the groomerModel', () => {
          expect(groomerModel.find).toHaveBeenCalledWith(groomerFilterQuery);
        })

        test('then it should return a groomer', () => {
          expect(groomers).toEqual([groomerStub()]);
        })
      })
    })

    describe('findOneAndUpdate', () => {
      describe('when findOneAndUpdate is called', () => {
        let groomer: Groomer;

        beforeEach(async () => {
          jest.spyOn(groomerModel, 'findOneAndUpdate');
          groomer = await groomersRepository.findOneAndUpdate(groomerFilterQuery, groomerStub());
        })

        test('then it should call the groomerModel', () => {
          expect(groomerModel.findOneAndUpdate).toHaveBeenCalledWith(groomerFilterQuery, groomerStub(), { new: true });
        })

        test('then it should return a groomer', () => {
          expect(groomer).toEqual(groomerStub());
        })
      })
    })
  })

  describe('create operations', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          GroomersRepository,
          {
            provide: getModelToken(Groomer.name),
            useValue: GroomerModel,
          },
        ],
      }).compile();

      groomersRepository = moduleRef.get<GroomersRepository>(GroomersRepository);
    });

    describe('create', () => {
      describe('when create is called', () => {
        let groomer: Groomer;
        let saveSpy: jest.SpyInstance;
        let constructorSpy: jest.SpyInstance;

        beforeEach(async () => {
          saveSpy = jest.spyOn(GroomerModel.prototype, 'save');
          constructorSpy = jest.spyOn(GroomerModel.prototype, 'constructorSpy');
          groomer = await groomersRepository.create(groomerStub());
        })

        test('then it should call the groomerModel', () => {
          expect(saveSpy).toHaveBeenCalled();
          expect(constructorSpy).toHaveBeenCalledWith(groomerStub())
        })

        test('then it should return a groomer', () => {
          expect(groomer).toEqual(groomerStub());
        })
      })
    })
  })
})