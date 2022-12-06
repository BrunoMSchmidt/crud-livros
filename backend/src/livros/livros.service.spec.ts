import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from '../config/dbconfig';
import { Livro } from './entities/livro.entity';
import { LivrosService } from './livros.service';

describe('LivrosService', () => {
    let service: LivrosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(dbconfig),
                TypeOrmModule.forFeature([Livro]),
            ],
            providers: [LivrosService],
        }).compile();

        service = module.get<LivrosService>(LivrosService);

        console.log(service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
