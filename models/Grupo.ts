import mongoose, { Schema, model, Model } from "mongoose";
import { IGrupo } from "../interfaces";

const grupoSchema = new Schema(
  {
    name: { type: String, required: true },
    posicion1: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    posicion2: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    posicion3: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    posicion4: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    partidos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Partido",
        autopopulate: true,
      },
    ],
    equipos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipo",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Grupo: Model<IGrupo> =
  mongoose.models.Grupo || model("Grupo", grupoSchema);

export default Grupo;
