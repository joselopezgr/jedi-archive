import { JediRanks, JediRanksValueObject } from 'src/jedi-archive/domain/value_objects/jediRanks.valueObject';

export class UpdateJediDto {
  name: string;
  rank: JediRanks;
  lightsaberColor: string;
}
