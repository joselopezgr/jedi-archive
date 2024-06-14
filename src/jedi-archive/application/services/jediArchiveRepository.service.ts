import { InjectRepository } from '@nestjs/typeorm';
import { IJediRepository } from '../ports/jediArchive.repository';
import { Injectable } from '@nestjs/common';
import { JediEntity } from 'src/jedi-archive/domain/entities/jedi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JediRepository implements IJediRepository {
  constructor(
    @InjectRepository(JediEntity)
    private jediRepository: Repository<JediEntity>,
  ) {}

  createJedi: IJediRepository['createJedi'] = async (jedi) => {
    const jediRecord = this.jediRepository.create({
      name: jedi.name,
      rank: jedi.rank,
      lightsaberColor: jedi.lightsaberColor,
    });

    if (!jediRecord) {
      throw new Error('Could not create Jedi');
    }

    await this.jediRepository.save(jediRecord);
    return jedi;
  };

  getAllJedi: IJediRepository['getAllJedi'] = async () => {
    const allJedi = await this.jediRepository.find();

    if (!allJedi) {
      throw new Error('No Jedi found');
    }

    return allJedi;
  };

  getJediById: IJediRepository['getJediById'] = async (id) => {
    const jedi = await this.jediRepository.findOne({
      where: {
        id,
      },
    });

    if (!jedi) {
      throw new Error('Jedi not found');
    }

    return jedi;
  };

  updateJedi: IJediRepository['updateJedi'] = async (id, jedi) => {
    const jediRecord = await this.jediRepository.findOne({
      where: {
        id,
      },
    });

    if (!jediRecord) {
      throw new Error('Jedi not found');
    }

    jediRecord.name = jedi.name;
    jediRecord.rank = jedi.rank;
    jediRecord.lightsaberColor = jedi.lightsaberColor;

    await this.jediRepository.save(jediRecord);
    return jedi;
  };

  deleteJedi: IJediRepository['deleteJedi'] = async (id) => {
    const jediRecord = await this.jediRepository.findOne({
      where: {
        id,
      },
    });

    if (!jediRecord) {
      throw new Error('Jedi not found');
    }

    await this.jediRepository.delete(jediRecord);
    return;
  };
}
