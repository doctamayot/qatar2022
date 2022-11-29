import mongoose, { Schema, model, Model } from "mongoose";
import { IOctavo } from "../interfaces";

const octavoapSchema = new Schema(
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

const OctavoAp: Model<IOctavo> =
  mongoose.models.OctavoAp || model("OctavoAp", octavoapSchema);

export default OctavoAp;
