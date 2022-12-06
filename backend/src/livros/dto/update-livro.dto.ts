import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger/dist/decorators';
import { CreateLivroDto } from './create-livro.dto';

export class UpdateLivroDto extends PartialType(CreateLivroDto) {
    @ApiPropertyOptional({
        description: 'Título do livro',
        example: 'O Senhor dos Anéis',
    })
    titulo?: string;

    @ApiPropertyOptional({
        description: 'Descrição do livro',
        example:
            'O Senhor dos Anéis é um romance de fantasia épica escrito por J. R. R. Tolkien. É a sequência de O Hobbit, e é o terceiro livro da trilogia da Terra-média, que também inclui O Silmarillion e O Silmarillion: Contos Inacabados.',
        required: false,
    })
    descricao?: string;

    @ApiPropertyOptional({
        description: 'Autor do livro',
        example: 'J. R. R. Tolkien',
    })
    autor?: string;

    @ApiPropertyOptional({
        description: 'Editora do livro',
        example: 'Martins Fontes',
    })
    editora?: string;

    @ApiPropertyOptional({
        description: 'Ano de publicação do livro',
        example: 1954,
    })
    ano?: number;

    @ApiPropertyOptional({
        description: 'Imagem do livro',
        example:
            'https://images-na.ssl-images-amazon.com/images/I/51Z9YQZQFJL._SX331_BO1,204,203,200_.jpg',
        required: false,
    })
    imagem?: string;
}
