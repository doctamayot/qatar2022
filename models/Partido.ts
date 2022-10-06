import mongoose, { Schema, model, Model } from "mongoose";
import { IPartido } from "../interfaces";

const partidoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    local: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipo",
        autopopulate: true,
      },
    ],
    visitante: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipo",
        autopopulate: true,
      },
    ],
    golocal: { type: Number },
    golvisitante: { type: Number },
    resultado: { type: String },
    fecha: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Partido: Model<IPartido> =
  mongoose.models.Partido || model("Partido", partidoSchema);

export default Partido;
