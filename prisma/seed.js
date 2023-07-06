const {prismaClient, PrismaClient} = require('@prisma/client')
const { matchData } = require('./data.js')

const prisma = new PrismaClient();

const load = async () => {
    try{ 
        await prisma.match.createMany({
            data: matchData
        });
        console.log('Successfully created matches');
    }catch (error) {
        console.error(error);
    } finally {
        //Als alles is gelukt willen we prisma gaan disconnecten om onnodige connecties te voorkomen
        await prisma.$disconnect();
    }
}

load();