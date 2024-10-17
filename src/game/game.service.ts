import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService){}
  create(data: { title: string; genre: string; platform: string }) {
    return this.prisma.game.create({
      data, 
    });
  }

  
  findAll() {
    return this.prisma.game.findMany();
  }

  // Obtener un juego por ID
  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
    });
  }

 

  update(id: number, data: { title?: string; genre?: string; platform?: string }) {
    return this.prisma.game.update({
      where: { id },
      data: UpdateGameDto,
    });
  }
  
  // Eliminar un juego por ID
  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
