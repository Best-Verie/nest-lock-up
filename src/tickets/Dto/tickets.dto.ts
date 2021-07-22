import { ApiProperty } from "@nestjs/swagger";

export class createTicket{
  
    @ApiProperty()
    preferredTicketCategory:string;

    @ApiProperty()
    amountPaid:number;

    @ApiProperty()
    issuedTo:string;

}