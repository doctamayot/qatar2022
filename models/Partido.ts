import mongoose, { Schema, model, Model } from "mongoose";
import { IPartido } from "../interfaces";

const partidoSchema = new Schema(
  {
    //user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    nombre: { type: String, required: true, unique: true },
    local: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },

    visitante: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },

    golocal: { type: Number },
    golvisitante: { type: Number },
    resultado: { type: String },
    ronda: { type: String },

    idapi: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Partido: Model<IPartido> =
  mongoose.models.Partido || model("Partido", partidoSchema);

export default Partido;
