import { Body, Controller, Get, Param } from '@nestjs/common';
import { UpdateJediUseCase } from 'src/jedi-archive/application/use_cases/updateJedi.useCase';
import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';

@Controller('/api/jedi')
export class UpdateJediController {
  constructor(private readonly updateJediUseCase: UpdateJediUseCase) {}

  @Get(':id')
  async updateJedi(@Param() id: string, @Body() jedi: JediEntity) {
    return this.updateJediUseCase.exec(id, jedi);
  }
}
