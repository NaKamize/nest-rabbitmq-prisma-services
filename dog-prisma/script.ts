import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.toy.deleteMany();
    await prisma.dog.deleteMany();
    await prisma.user.deleteMany();
    let peter = await prisma.user.create({
        data: {
            name: "Peter",
            email: "letsgo2@letsgo2.com",
            age: 42,
        }
    })
    let dogPeter = await prisma.dog.create({
        data: {
            name: "Rex",
            birth: new Date(),
            breed: "Vlk",
            ownerrId: peter.id
        }
    })
    let dogPeter1 = await prisma.dog.create({
        data: {
            name: "Leo",
            birth: new Date(),
            breed: "Papagaj",
            ownerrId: peter.id
        }
    })
    let frantaWDog = await prisma.user.create({
        data: {
            name: "Franta",
            email: "letsgo3@letsgo3.com",
            age: 42,
            dogs: {
                create: [
                    {
                        name: "Rex",
                        birth: new Date(),
                        breed: "Retriver"
                    }
                ]
            }
        }
    })
    let frantaWDog1 = await prisma.user.create({
        data: {
            name: "Franta",
            email: "letsgo4@letsgo4.com",
            age: 42,
            dogs: {
                create: [
                    {
                        name: "Rex",
                        birth: new Date(),
                        breed: "Retriver",
                    }
                ]
            }
        }
    })
    let toy1 = await prisma.toy.create({
        data: {
            name: "Medvedik",
            dogs: {
                connect: {
                    id: dogPeter1.id
                }
            }
        }
    })
    let toy2 = await prisma.toy.create({
        data: {
            name: "Lopticka",
            dogs: {
                connect: {
                    id: dogPeter.id
                }
            }
        }
    })
    console.log(peter)
    console.log(dogPeter)
    console.log(dogPeter1)
    console.log(frantaWDog)
    console.log(frantaWDog1)
    console.log(toy1)
    console.log(toy2)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })