import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Pet } from './schemas/pet.schema';
import { PetsService } from './pets.service';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Get(':_id')
  async getPet(@Param('_id') _id: string): Promise<Pet> {
    return this.petsService.getPetById(_id);
  }

  @Get()
  async getPets(): Promise<Pet[]> {
    return this.petsService.getPets();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'This pet has been recorded.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createPet(@Body() createPetDto: CreatePetDto): Promise<Pet> {
    return this.petsService.createPet(createPetDto.ownerEmail, createPetDto.dogName, createPetDto.rabiesVaccine, createPetDto.ownerName)
  }

  @Patch(':_id')
  async updatePet(@Param('_id') _id: string, @Body() updatePetDto: UpdatePetDto): Promise<Pet> {
    return this.petsService.updatePet(_id, updatePetDto);
  }
}