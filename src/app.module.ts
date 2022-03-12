import { Module } from '@nestjs/common';

import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CrudModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities:true,
      synchronize: true,})
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
