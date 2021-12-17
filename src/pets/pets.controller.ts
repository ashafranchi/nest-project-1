import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

import { Pet } from './schemas/pet.schema';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get(':petId')
  async getPet(@Param('petId') petId: string): Promise<Pet> {
    return this.petsService.getPetById(petId);
  }

  @Get()
  async getPets(): Promise<Pet[]> {
      return this.petsService.getPets();
  }

  @Post()
  async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
      return this.petsService.createPet(createPetDto.ownerEmail, createPetDto.dogName, createPetDto.rabiesVaccine, createPetDto.ownerName)
  }

  @Patch(':petId')
  async updatePet(@Param('petId') petId: string, @Body() updatePetDto: UpdatePetDto): Promise<Pet> {
      return this.petsService.updatePet(petId, updatePetDto);
  }
}