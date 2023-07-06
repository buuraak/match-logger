import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
    const matches = await prisma.match.findFirst();
    return NextResponse.json({data: matches}, {status: 200});
}