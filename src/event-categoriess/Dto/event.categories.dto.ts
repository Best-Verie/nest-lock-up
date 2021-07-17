import { ApiProperty } from '@nestjs/swagger';
export class EventCategoriesDto{
    @ApiProperty()
    category_name:string;

}