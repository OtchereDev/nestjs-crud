import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Type, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CrudService } from './crud.service';
import CreateItemDTO from './dtos/createItem.dto';
import CrudEntity from './entity/crud.entity';

@ApiTags("CRUD")
@Controller()
export class CrudController {

    constructor(private crudService: CrudService){}

    @ApiOkResponse({ description: "Get All Items", type: [CrudEntity]})
    @Get("get-all-item")
    async getAllItems(): Promise<CrudEntity[]>{
        return await this.crudService.getAllItems()
    }

    @ApiOkResponse({ description: "Get An Items", type: CrudEntity})
    @Get("get-item/:id")
    async getItem(@Param("id", ParseUUIDPipe) id:string) : Promise<CrudEntity>{
        return await this.crudService.getItem(id)
    }

    @ApiOkResponse({ description: "Create An Items", type: CrudEntity})
    @Post("create-item")
    @UsePipes(ValidationPipe)
    async createItem(@Body() body:CreateItemDTO) : Promise<CrudEntity>{
        return  await this.crudService.createItem(body)
    }


    @ApiOkResponse({ description: "Update An Items",})
    @Patch("update-item/:id")
    @UsePipes(ValidationPipe)
    async updateItem(@Body() body: CreateItemDTO, @Param("id", ParseUUIDPipe) id:string) : Promise<{message:string}>{
        return await this.crudService.updateItem(id, body)
    }

    @ApiOkResponse({ description: "Delete An Items",})
    @Delete("delete-item/:id")
    @UsePipes(ValidationPipe)
    async deleteItem(@Param("id", ParseUUIDPipe) id:string) : Promise<{message:string}>{
        return await this.crudService.deleteItem(id)
    }
}
