import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToysService {
    constructor(private prisma: PrismaService) {

    }

    async create(name: string, dId: string) {
        try {
            const toy = await this.prisma.toy.create({
                data: {
                    name: name,
                    dogs: {
                        connect: {
                            id: dId
                        }
                    }
                }
            })
            return toy
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string) {
        try {
            const toy = await this.prisma.toy.findMany({
                where: {
                    id: id
                }
            })
            return toy
        } catch (error) {
            throw error
        }
    }

    async findMany() {
        try {
            const toys = await this.prisma.toy.findMany({
            })
            return toys
        } catch (error) {
            throw error
        }
    }
}
