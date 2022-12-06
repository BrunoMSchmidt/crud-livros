import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    @MinLength(3, { message: 'Tamanho mínimo deve ser 3' })
    @MaxLength(150)
    @IsString()
    titulo: string;

    @Column({ type: 'longtext', nullable: true })
    @IsString()
    descricao: string;

    @Column({ length: 100 })
    @MinLength(3)
    @MaxLength(100)
    @IsString()
    autor: string;

    @Column({ length: 100, nullable: true })
    @MinLength(3)
    @MaxLength(100)
    @IsString()
    editora: string;

    @Column({ nullable: true })
    @IsNumber()
    ano: number;

    @Column({ length: 255, nullable: true })
    @MinLength(3)
    @MaxLength(255)
    @IsString()
    imagem: string;
}
