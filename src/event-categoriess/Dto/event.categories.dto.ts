import { ApiProperty } from '@nestjs/swagger';
export class EventCategoriesDto{

    @ApiProperty()
    eventId:string;

    @ApiProperty()
    category_name:string;

}