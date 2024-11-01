import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateGameDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    genre: string;

    @ApiProperty()
    @IsString()
    platform: string;

    @ApiProperty()
    @IsNumber()
    rating: number;
}

