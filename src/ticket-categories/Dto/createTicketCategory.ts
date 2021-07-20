import { ApiProperty } from "@nestjs/swagger";

export class createEvent{
    @ApiProperty()
    categoryName:string;

}