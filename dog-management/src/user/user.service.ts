import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
const Producer = require('../../rabbitmq/producer');
const producer = new Producer();

@Injectable({})
export class UserService {
    constructor(private prisma: PrismaService) {

    }
    async create(email: string, name: string, age: number) {
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: email, name: name, age: age
                }
            })
            return user
        } catch (error) {
            throw error
        }
    }

    async findOne(email: string) {
        try {
            const user = await this.prisma.user.findMany({
                where: {
                    email: email
                }
            })
            return user
        } catch (error) {
            throw error
        }
    }

    async findall() {
        try {
            const users = await this.prisma.user.findMany({
            })
            await producer.publishMessage('Info', users);
            return users
        } catch (error) {
            throw error
        }
    }
}