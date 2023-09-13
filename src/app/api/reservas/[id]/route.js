import { NextResponse } from "next/server";
import { connectDB } from "../../../../utils/mongoose";
import Reserva from "../../../../models/Reserva";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const reservaEncontrada = await Reserva.findById(params.id);
    if (!reservaEncontrada) {
      return NextResponse.json(
        {
          message: `Reserva ${params.id} no encontrada`,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(reservaEncontrada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const reservaEliminada = await Reserva.findByIdAndDelete(params.id);
    if (!reservaEliminada) {
      return NextResponse.json(
        {
          message: `Reserva ${params.id} no encontrada`,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(reservaEliminada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const data = await request.json();
    const reservaActualizada = await Reserva.findByIdAndUpdate(
      params.id,
      data,
      {
        new: true,
      }
    );
    return NextResponse.json(reservaActualizada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
