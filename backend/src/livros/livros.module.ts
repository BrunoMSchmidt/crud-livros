import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livro } from './entities/livro.entity';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
    imports: [TypeOrmModule.forFeature([Livro])],
    controllers: [LivrosController],
    providers: [LivrosService],
})
export class LivrosModule {}
