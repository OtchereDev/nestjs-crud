import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import CrudEntity from './entity/crud.entity';
import CrudRepo from './entity/crud.repo';

@Module({
  providers: [CrudService],
  controllers: [CrudController],
  imports:[
    TypeOrmModule.forFeature(
      [CrudEntity, CrudRepo]
    )
  ]
})
export class CrudModule {}
