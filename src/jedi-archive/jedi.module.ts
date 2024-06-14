import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JediEntity } from './domain/entities/jedi.entity';
import * as controllers from './infrastructure/controllers';
import { IJediRepository } from './application/ports/jediArchive.repository';
import { JediRepository } from './application/services/jediArchiveRepository.service';
import { GetAllJediUseCase } from './application/use_cases/getAllJedi.useCase';
import { GetJediByIdUseCase } from './application/use_cases/getJediById.useCase';
import { CreateJediUseCase } from './application/use_cases/createJedi.useCase';
import { UpdateJediUseCase } from './application/use_cases/updateJedi.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([JediEntity])],
  controllers: [
    controllers.GetAllJediController,
    controllers.CreateJediController,
    controllers.GetJediByIdController,
    controllers.UpdateJediController,
  ],
  providers: [
    {
      provide: IJediRepository,
      useClass: JediRepository,
    },
    GetAllJediUseCase,
    GetJediByIdUseCase,
    CreateJediUseCase,
    UpdateJediUseCase,
  ],
  exports: [IJediRepository],
})
export class JediModule {}
