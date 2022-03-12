import { EntityRepository, Repository } from "typeorm"
import CrudEntity from "./crud.entity";

@EntityRepository(CrudEntity)
export default class CrudRepo extends Repository<CrudEntity>{

}