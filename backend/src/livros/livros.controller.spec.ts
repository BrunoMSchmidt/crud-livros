import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from '../config/dbconfig';
import { Livro } from './entities/livro.entity';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

describe('LivrosController', () => {
    let controller: LivrosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(dbconfig),
                TypeOrmModule.forFeature([Livro]),
            ],
            controllers: [LivrosController],
            providers: [LivrosService],
        }).compile();

        controller = module.get<LivrosController>(LivrosController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
