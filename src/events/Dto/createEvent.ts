import { ApiProperty } from "@nestjs/swagger";

export class createEvent{
    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;
    
    @ApiProperty()
    venue:string;

    @ApiProperty()
    eventCategory:string;
    
    @ApiProperty()
    eventDate:string;
    
    @ApiProperty()
    StartTime:string;
    
    @ApiProperty()
    EndTime:string;
    
    @ApiProperty()
    createdBy:string;

}