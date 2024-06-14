import { Controller, Get } from '@nestjs/common';
import { GetJediByIdUseCase } from 'src/jedi-archive/application/use_cases/getJediById.useCase';

@Controller('/api/jedi')
export class GetJediByIdController {
  constructor(private readonly getJediByIdUseCase: GetJediByIdUseCase) {}

  @Get(':id')
  async getJediById(id: string) {
    return this.getJediByIdUseCase.exec(id);
  }
}
