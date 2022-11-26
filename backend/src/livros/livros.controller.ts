import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor(private readonly livrosService: LivrosService) {}

    @Post()
    create(@Body() createLivroDto: CreateLivroDto) {
        return this.livrosService.create(createLivroDto);
    }

    @Get()
    findAll() {
        return this.livrosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.livrosService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
        return this.livrosService.update(+id, updateLivroDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.livrosService.remove(+id);
    }
}
