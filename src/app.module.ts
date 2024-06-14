import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JediEntity } from './jedi-archive/domain/entities/jedi.entity';
import { JediModule } from './jedi-archive/jedi.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [JediEntity],
      synchronize: true,
    }),
    JediModule,
  ],
})
export class AppModule {}
