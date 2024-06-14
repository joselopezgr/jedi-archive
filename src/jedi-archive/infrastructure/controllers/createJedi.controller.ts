import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateJediUseCase } from 'src/jedi-archive/application/use_cases/createJedi.useCase';
import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';

@Controller('/api/jedi')
export class CreateJediController {
  constructor(private readonly createJediUseCase: CreateJediUseCase) {}

  @Post()
  @HttpCode(201)
  async createJedi(@Body() jedi: JediEntity) {
    return this.createJediUseCase.exec(jedi);
  }
}
