import { ApiProperty } from "@nestjs/swagger";

export class TicketCategoryDto{
    @ApiProperty()
    categoryName:string;
    
    @ApiProperty()
    createdBy:string;
}