import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
    @ApiProperty()
    title: string;
  
    @ApiProperty({ required: false })
    genre: string;
  
    @ApiProperty()
    platform: string;
  
    @ApiProperty({ default: new Date() })
    createdAt?: Date;
  
    @ApiProperty({ default: new Date() })
    updatedAt?: Date;
  }