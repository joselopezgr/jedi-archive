import { Inject, Injectable } from '@nestjs/common';
import { IJediRepository } from '../ports/jediArchive.repository';
import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';

@Injectable()
export class UpdateJediUseCase {
  constructor(
    @Inject(IJediRepository)
    private readonly jediArchiveRepository: IJediRepository,
  ) {}

  async exec(id: string, jedi: JediEntity) {
    try {
      if (!id) {
        throw new Error('Id is required');
      }
      if (!jedi) {
        throw new Error('Jedi is required');
      }
      const newJedi = await this.jediArchiveRepository.updateJedi(id, jedi);

      if (!newJedi) {
        throw new Error('Error updating Jedi');
      }

      return newJedi;
    } catch (error) {
      throw new Error('Error updating Jedi');
    }
  }
}
