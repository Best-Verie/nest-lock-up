import { ApiProperty } from "@nestjs/swagger";
export class getEvent{
    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;
    
    @ApiProperty()
    venue:string;

    @ApiProperty()
    eventCategory:string;

    @ApiProperty()
    numberofAvailableTickets:number;
    
    @ApiProperty()
    eventDate:string;
    
    @ApiProperty()
    StartTime:string;
    
    @ApiProperty()
    EndTime:string;
    
    // @ApiProperty()
    // createdBy:string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

}