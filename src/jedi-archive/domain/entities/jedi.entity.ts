import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { JediRanks } from '../value_objects/jediRanks.valueObject';

@Entity({ name: 'jedi' })
export class JediEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: JediRanks,
    default: JediRanks.Youngling,
  })
  rank: JediRanks;

  @Column()
  lightsaberColor: string;
}
