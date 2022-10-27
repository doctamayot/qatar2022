import mongoose, { Schema, model, Model } from "mongoose";
import { IFinal } from "../interfaces";

const finalapSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
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
  },
  {
    timestamps: true,
  }
);

const FinalAp: Model<IFinal> =
  mongoose.models.FinalAp || model("FinalAp", finalapSchema);

export default FinalAp;
