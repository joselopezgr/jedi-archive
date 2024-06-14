import { JediRanksValueObject } from 'src/jedi-archive/domain/value_objects/jediRanks.valueObject';

export class CreateJediDto {
  name: string;
  rank: JediRanksValueObject;
  lightsaberColor: string;
}
