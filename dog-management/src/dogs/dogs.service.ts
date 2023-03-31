import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogsService {
    constructor(private prisma: PrismaService) {

    }

    async create(name: string, birth: string, breed: string, ownerrId: string) {
        try {
            const dog = await this.prisma.dog.create({
                data: {
                    name: name,
                    birth: new Date(),
                    breed: breed,
                    ownerrId: ownerrId
                }
            })
            return dog
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const dog = await this.prisma.dog.findMany({
                where: {
                    id: id
                }
            })
            return dog
        } catch (error) {
            throw error
        }
    }

    async findMany() {
        try {
            const dogs = await this.prisma.dog.findMany({
            })
            return dogs
        } catch (error) {
            throw error
        }
    }
}
