import { Schema, model, models } from "mongoose";

const reservaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      trim: true,
    },
    whatsapp: {
      type: Number,
      required: [true, "Whatsapp es requerido"],
      trim: true,
    },
    especialidad: {
      type: String,
      trim: true,
    },
    turno: {
      type: String,
      trim: true,
    },
    fecha: {
      type: Date,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Reserva || model("Reserva", reservaSchema);
