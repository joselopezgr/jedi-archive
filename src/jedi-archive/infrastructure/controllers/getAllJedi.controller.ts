import { Controller, Get, HttpCode } from '@nestjs/common';
import { GetAllJediUseCase } from 'src/jedi-archive/application/use_cases/getAllJedi.useCase';
import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';

@Controller('/api/jedi')
export class GetAllJediController {
  constructor(private readonly getAllJediUseCase: GetAllJediUseCase) {}

  @Get()
  @HttpCode(200)
  async getAllJedi(): Promise<JediEntity[]> {
    return this.getAllJediUseCase.exec();
  }
}
