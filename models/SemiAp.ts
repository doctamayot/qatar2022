import mongoose, { Schema, model, Model } from "mongoose";
import { ISemi } from "../interfaces";

const semiapSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    puntos: { type: Number },
    ganador: {
      type: Schema.Types.ObjectId,
      ref: "EquipoAp",
      autopopulate: true,
    },
    perdedor: {
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

const SemiAp: Model<ISemi> =
  mongoose.models.SemiAp || model("SemiAp", semiapSchema);

export default SemiAp;
