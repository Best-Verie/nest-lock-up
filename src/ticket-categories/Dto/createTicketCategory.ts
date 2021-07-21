import { ApiProperty } from "@nestjs/swagger";

export class TicketCategoryDto{

    @ApiProperty()
    categoryName:string;

    @ApiProperty()
    categoryPrice:number;

    
    @ApiProperty()
    numberofAvailableTickets:number;
    
    @ApiProperty()
    createdBy:string;
}