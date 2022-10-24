import mongoose, { Schema, model, Model } from "mongoose";
import { IEquipo } from "../interfaces";

const equipoapSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    bandera: { type: String, required: true },
    grupo: { type: String, required: true },
    apiteamid: { type: Number, required: true },
    puntos: { type: Number },
    golesfavor: { type: Number },
    golescontra: { type: Number },
    difgoles: { type: Number },
  },
  {
    timestamps: true,
  }
);

const EquipoAp: Model<IEquipo> =
  mongoose.models.EquipoAp || model("EquipoAp", equipoapSchema);

export default EquipoAp;
