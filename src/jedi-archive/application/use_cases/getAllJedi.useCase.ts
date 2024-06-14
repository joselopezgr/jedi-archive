import { Inject, Injectable } from '@nestjs/common';
import { IJediRepository } from '../ports/jediArchive.repository';

@Injectable()
export class GetAllJediUseCase {
  constructor(
    @Inject(IJediRepository)
    private readonly jediArchiveRepository: IJediRepository,
  ) {}

  async exec() {
    try {
      const fullArchive = await this.jediArchiveRepository.getAllJedi();

      if (!fullArchive) {
        throw new Error('No Jedi found');
      }

      return fullArchive;
    } catch (error) {
      throw new Error('Error getting Jedi');
    }
  }
}
