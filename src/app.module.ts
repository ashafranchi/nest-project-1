import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from '../src/pets/pets.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}