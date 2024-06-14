import { Inject, Injectable } from "@nestjs/common";
import { IJediRepository } from "../ports/jediArchive.repository";
import { JediEntity } from "src/jedi-archive/domain/entities/jedi.entity";

@Injectable()
export class CreateJediUseCase {
  constructor(
    @Inject(IJediRepository)
    private readonly jediArchiveRepository: IJediRepository
  ) {}

  async exec(jedi: JediEntity) {
    try {
      if (!jedi) {
        throw new Error("Jedi is required");
      }
      const newJedi = await this.jediArchiveRepository.createJedi(jedi);
      if (!newJedi) {
        throw new Error("Error creating Jedi");
      }
      return newJedi;
    } catch (error) {
      throw new Error("Jedi creation failed" + error.message);
    }
  }
}
