import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { DatabaseService } from '../../../database/database.service';
import { AppModule } from '../../../app.module';
import { petStub } from '../stubs/pet.stub';
import { CreatePetDto } from 'src/pets/dto/create-pet.dto';
import { UseFilters } from '@nestjs/common';

describe('PetsController', () => {
    let dbConnection: Connection;
    let httpServer: any;
    let app: any;

    beforeAll(async() => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
        dbConnection = moduleRef.get<DatabaseService>(DatabaseService).getDbHandle()
        httpServer = app.getHttpServer();
    })

    afterAll(async () => {
        await dbConnection.collection('pets').deleteMany({});
        await app.close();
    })

    describe('getPets', () => {
        it('should return an array of users', async () => {
            await dbConnection.collection('pets').insertOne(petStub())
            const response = await request(httpServer).get('/pets')

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject([petStub()])
        })      
    })

    describe('createPet', () => {
        it('should create a pet', async () => {
            const createPetDto : CreatePetDto = {
                ownerEmail: petStub().ownerEmail,
                ownerName: petStub().ownerName,
                dogName: petStub().dogName,
                rabiesVaccine: petStub().rabiesVaccine
            }
            const response = await request(httpServer).post('/pets').send(createPetDto)
    
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(createPetDto);
    
            const pet = await dbConnection.collection('pets').findOne({ ownerEmail: createPetDto.ownerEmail });
            expect(pet).toMatchObject(createPetDto);
        })
    })
})