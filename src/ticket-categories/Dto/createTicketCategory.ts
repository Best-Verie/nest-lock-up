import { ApiProperty } from "@nestjs/swagger";

export class TicketCategoryDto{
    @ApiProperty()
    eventId:string;
    
    @ApiProperty()
    categoryName:string;

    @ApiProperty()
    categoryPrice:string;

    
    @ApiProperty()
    numberofAvailableTickets:number;
    
    @ApiProperty()
    createdBy:string;
}