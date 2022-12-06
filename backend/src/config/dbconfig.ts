import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Livro } from '../livros/entities/livro.entity';

const dbconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'novo',
    password: '1234',
    database: 'crudlivros',
    entities: [Livro],
    synchronize: true,
};

export { dbconfig };
