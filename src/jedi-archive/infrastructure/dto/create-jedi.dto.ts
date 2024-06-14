import { JediRanks, JediRanksValueObject } from 'src/jedi-archive/domain/value_objects/jediRanks.valueObject';

export class CreateJediDto {
  name: string;
  rank: JediRanks;
  lightsaberColor: string;
}
