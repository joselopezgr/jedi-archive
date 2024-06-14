import { Inject, Injectable } from '@nestjs/common';
import { IJediRepository } from '../ports/jediArchive.repository';

@Injectable()
export class GetJediByIdUseCase {
  constructor(
    @Inject(IJediRepository)
    private readonly jediArchiveRepository: IJediRepository,
  ) {}

  async exec(id: string) {
    try {
      if (!id) {
        throw new Error('Id is required');
      }

      const jedi = await this.jediArchiveRepository.getJediById(id);

      if (!jedi) {
        throw new Error('Jedi not found');
      }
      return jedi;
    } catch (error) {
      throw new Error('Error getting Jedi');
    }
  }
}
