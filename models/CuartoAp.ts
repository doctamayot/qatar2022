import mongoose, { Schema, model, Model } from "mongoose";
import { ICuarto } from "../interfaces";

const cuartoapSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    puntos: { type: Number },
    ganador: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    partido: {
      type: Schema.Types.ObjectId,
      ref: "PartidoAp",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

const CuartoAp: Model<ICuarto> =
  mongoose.models.CuartoAp || model("CuartoAp", cuartoapSchema);

export default CuartoAp;
