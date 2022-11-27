import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
    constructor(
        @InjectRepository(Livro) private livrosRepository: Repository<Livro>,
    ) {}

    async create(createLivroDto: CreateLivroDto) {
        return await this.livrosRepository.save(createLivroDto);
    }

    async findAll() {
        return await this.livrosRepository.find();
    }

    async findOne(id: number) {
        const livro = await this.livrosRepository.findOneBy({
            id,
        });

        if (!livro) {
            throw new NotFoundException('Livro não encontrado');
        }

        return livro;
    }

    async update(id: number, updateLivroDto: UpdateLivroDto) {
        const livroEditado = await this.livrosRepository.findOneBy({ id });
        if (!livroEditado) {
            throw new NotFoundException('Livro não encontrado');
        }

        if (updateLivroDto.ano) {
            livroEditado.ano = updateLivroDto.ano;
        }

        if (updateLivroDto.autor) {
            livroEditado.autor = updateLivroDto.autor;
        }

        if (updateLivroDto.descricao) {
            livroEditado.descricao = updateLivroDto.descricao;
        }

        if (updateLivroDto.imagem) {
            livroEditado.imagem = updateLivroDto.imagem;
        }

        if (updateLivroDto.titulo) {
            livroEditado.titulo = updateLivroDto.titulo;
        }

        if (updateLivroDto.editora) {
            livroEditado.editora = updateLivroDto.editora;
        }

        return livroEditado.save();
    }

    async remove(id: number) {
        const livroParaDeletar = await this.livrosRepository.findOneBy({ id });

        if (!livroParaDeletar) {
            throw new NotFoundException('Livro não encontrado');
        }

        return this.livrosRepository.remove(livroParaDeletar);
    }
}
