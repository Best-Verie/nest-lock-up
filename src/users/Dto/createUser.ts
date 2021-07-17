import { ApiProperty } from "@nestjs/swagger";

export class createUser{
    @ApiProperty()
    firstname:string;

    @ApiProperty()
    lastname:string;
    
    @ApiProperty()
    email:string;

    @ApiProperty()
    phone:string;
    
    @ApiProperty()
    password:string;

}