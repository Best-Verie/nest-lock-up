import { ApiProperty } from "@nestjs/swagger";

export class createTicket{
    @ApiProperty()
    ticketNo:number;

    @ApiProperty()
    preferredTicketCategory:string;

    @ApiProperty()
    amountPaid:number;

    @ApiProperty()
    issuedTo:string;

}