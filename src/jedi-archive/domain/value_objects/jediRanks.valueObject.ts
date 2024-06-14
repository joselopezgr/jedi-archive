export enum JediRanks {
  Youngling,
  Padawan,
  Knight,
  Master,
  GrandMaster,
}

type JediRanksValueObjectProps = {
  rank: JediRanks;
};

export class JediRanksValueObject {
  private props: JediRanksValueObjectProps;
  private constructor(props: JediRanksValueObjectProps) {
    this.props = props;
  }
  static create(rank: JediRanks): JediRanksValueObject {
    return new JediRanksValueObject({ rank });
  }
  get value(): JediRanks {
    return this.props.rank;
  }

  isYoungling(): boolean {
    return this.props.rank === JediRanks.Youngling;
  }

  isPadawan(): boolean {
    return this.props.rank === JediRanks.Padawan;
  }

  isKnight(): boolean {
    return this.props.rank === JediRanks.Knight;
  }

  isMaster(): boolean {
    return this.props.rank === JediRanks.Master;
  }

  isGrandMaster(): boolean {
    return this.props.rank === JediRanks.GrandMaster;
  }
}
