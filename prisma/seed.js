const {PrismaClient} = require('@prisma/client');
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
        //If everything went well, we want to close the database connection as good practice
        await prisma.$disconnect();
    }
}

load();