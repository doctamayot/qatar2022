import mongoose, { Schema, model, Model } from "mongoose";
import { IEquipo } from "../interfaces";

const equipoSchema = new Schema(
  {
    name: { type: String, required: true },
    bandera: { type: String, required: true },
    grupo: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Equipo: Model<IEquipo> =
  mongoose.models.Equipo || model("Equipo", equipoSchema);

export default Equipo;