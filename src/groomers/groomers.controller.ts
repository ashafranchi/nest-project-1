import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateGroomerDto } from './dto/create-groomer.dto';
import { UpdateGroomerDto } from './dto/update-groomer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Groomer } from './schemas/groomer.schema';
import { GroomersService } from './groomers.service';

@ApiTags('Groomers')
@Controller('groomers')
export class GroomersController {
  constructor(private readonly groomersService: GroomersService) { }

  @Get(':_id')
  async getGroomer(@Param('_id') _id: string): Promise<Groomer> {
    return this.groomersService.getGroomerById(_id);
  }

  @Get()
  async getGroomers(): Promise<Groomer[]> {
    return this.groomersService.getGroomers();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'This groomer has been recorded.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createGroomer(@Body() createGroomerDto: CreateGroomerDto): Promise<Groomer> {
    return this.groomersService.createGroomer(createGroomerDto.groomerName, createGroomerDto.email, createGroomerDto.age)
  }

  @Patch(':_id')
  async updateGroomer(@Param('_id') _id: string, @Body() updateGroomerDto: UpdateGroomerDto): Promise<Groomer> {
    return this.groomersService.updateGroomer(_id, updateGroomerDto);
  }
}