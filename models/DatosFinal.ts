import mongoose, { Schema, model, Model } from "mongoose";
import { IFinal } from "../interfaces";

const datosfinalSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    puntos: { type: Number },
    puntoscampeon: { type: Number },
    campeon: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    sub: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    tercero: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },

    cuarto: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    goleador: { type: String },
    masvencida: { type: String },
    menosvencida: { type: String },
    rojas: { type: String },
    amarillas: { type: String },
    masgoles: { type: String },
    menosgoles: { type: String },
    grupomasgoles: { type: String },
    grupomenosgoles: { type: String },
    jugado: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const DatosFinal: Model<any> =
  mongoose.models.DatosFinal || model("DatosFinal", datosfinalSchema);

export default DatosFinal;
