import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbconfig } from './config/dbconfig';
import { LivrosModule } from './livros/livros.module';

@Module({
    imports: [TypeOrmModule.forRoot(dbconfig), LivrosModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
