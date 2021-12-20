import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { DatabaseService } from '../../../database/database.service';
import { AppModule } from '../../../app.module';
import { groomerStub } from '../stubs/groomer.stub';
import { CreateGroomerDto } from 'src/groomers/dto/create-groomer.dto';

describe('GroomersController', () => {
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
        await dbConnection.collection('groomers').deleteMany({});
        await app.close();
    })

    describe('getGroomers', () => {
        it('should return an array of users', async () => {
            await dbConnection.collection('groomers').insertOne(groomerStub())
            const response = await request(httpServer).get('/groomers')

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject([groomerStub()])
        })      
    })

    describe('createGroomer', () => {
        it('should create a groomer', async () => {
            const createGroomerDto : CreateGroomerDto = {
                groomerName: groomerStub().groomerName,
                email: groomerStub().email,
                age: groomerStub().age
            }
            const response = await request(httpServer).post('/groomers').send(createGroomerDto)
    
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(createGroomerDto);
    
            const groomer = await dbConnection.collection('groomers').findOne({ email: createGroomerDto.email });
            expect(groomer).toMatchObject(createGroomerDto);
        })
    })
})