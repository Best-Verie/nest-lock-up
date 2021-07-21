import { ApiProperty } from "@nestjs/swagger";

export class createTicket{
    @ApiProperty()
    ticketNo:number;

    @ApiProperty()
    event:string;

    @ApiProperty()
    amountPaid:number;

    @ApiProperty()
    issuedTo:string;

}