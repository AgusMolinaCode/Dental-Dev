import { NextResponse } from "next/server";
import { connectDB } from "../../../utils/mongoose";
import Reserva from "../../../models/Reserva";

export async function GET() {
  await connectDB();
  const reservas = await Reserva.find();
  return NextResponse.json(reservas);
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const reserva = new Reserva(data);
    const reservaGuardada = await reserva.save();
    return NextResponse.json(reservaGuardada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
