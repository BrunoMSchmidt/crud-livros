import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livros/entities/livro.entity';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'novo',
      password: '1234',
      database: 'crudlivros',
      entities: [Livro],
      synchronize: true,
    }),
    LivrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
