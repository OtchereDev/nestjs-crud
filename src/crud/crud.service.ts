import { BadRequestException, Injectable } from '@nestjs/common';
import CreateItemDTO from './dtos/createItem.dto';
import CrudEntity from './entity/crud.entity';
import CrudRepo from './entity/crud.repo';

@Injectable()
export class CrudService {

    constructor(private crudRepo: CrudRepo){}

    async getAllItems(): Promise<CrudEntity[]>{
        return await this.crudRepo.find({})
    }

    async getItem(id: string): Promise<CrudEntity>{
        return await this.crudRepo.findOne({id})
    }

    async createItem(body: CreateItemDTO): Promise<CrudEntity>{
        const item = await this.crudRepo.create({...body}).save()

        return item
    }

    async updateItem( id: string, body: CreateItemDTO): Promise<{message:string}>{
        const item = await this.crudRepo.findOne({id})

        if (!item) throw new BadRequestException({ message: "Item does not exist"})

        item.name = body.name

        await item.save()

        return {
            message: "Item has successfully been updated"
        }
    }

    async deleteItem(id: string) : Promise<{message:string}>{
        const item = await this.crudRepo.findOne({id})

        if (!item) throw new BadRequestException({ message: "Item does not exist"})

        await item.remove()

        return {
            message: "Item has successfully been deleted"
        }
    }

}
