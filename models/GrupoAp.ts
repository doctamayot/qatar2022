import mongoose, { Schema, model, Model } from "mongoose";
import { IGrupo } from "../interfaces";

const grupoApSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    puntos: { type: Number },
    posicion1: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    posicion2: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    posicion3: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    posicion4: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    partidos: [
      {
        type: Schema.Types.ObjectId,
        ref: "PartidoAp",
        autopopulate: true,
      },
    ],
    equipos: [
      {
        type: Schema.Types.ObjectId,
        ref: "EquipoAp",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const GrupoAp: Model<IGrupo> =
  mongoose.models.GrupoAp || model("GrupoAp", grupoApSchema);

export default GrupoAp;
