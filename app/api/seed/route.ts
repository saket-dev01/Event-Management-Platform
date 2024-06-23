import { seed } from "@/app/lib/actions/seed";
import { NextResponse } from "next/server";
export async function GET() {

    await seed();
    return NextResponse.json({
        msg:"Already seeded"
    })
}