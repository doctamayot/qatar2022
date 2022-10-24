import mongoose, { Schema, model, Model } from "mongoose";
import { IEquipo } from "../interfaces";

const apuestaSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    equipos:[{ type: Schema.Types.ObjectId, ref: "Equipo"}], 
    partidos:[{ type: Schema.Types.ObjectId, ref: "Partido"}], 
    golocal: { type: Number },
    golvisitante: { type: Number },
    resultado: { type: String },
    ronda: { type: String },
    grupo: { type: String },

    idapi: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Apuesta: Model<any> =
  mongoose.models.Apuesta || model("Apuesta", apuestaSchema);

export default Apuesta;
