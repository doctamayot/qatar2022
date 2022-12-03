import mongoose, { Schema, model, Model } from "mongoose";
import { IPartido } from "../interfaces";

const partidoapSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    nombre: { type: String, required: true },
    local: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    jugado: { type: Boolean },

    visitante: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },

    golocal: { type: Number },
    golvisitante: { type: Number },
    puntos: { type: Number },
    puntoscuartos: { type: Number },
    partido: { type: Number },
    resultado: { type: String },
    ronda: { type: String },
    grupo: { type: String },

    idapi: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const PartidoAp: Model<IPartido> =
  mongoose.models.PartidoAp || model("PartidoAp", partidoapSchema);

export default PartidoAp;
