import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';

export interface IJediRepository {
  getAllJedi: () => Promise<JediEntity[]>;
  getJediById: (id: string) => Promise<JediEntity>;
  createJedi: (jedi: JediEntity) => Promise<JediEntity>;
  updateJedi: (id: string, jedi: JediEntity) => Promise<JediEntity>;
  deleteJedi: (id: string) => Promise<void>;
}

export const IJediRepository = Symbol('IJediRepository');
