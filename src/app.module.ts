import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroomersModule } from './groomers/groomers.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'), PetsModule, GroomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}