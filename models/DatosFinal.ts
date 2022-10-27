import mongoose, { Schema, model, Model } from "mongoose";
import { IFinal } from "../interfaces";

const datosfinalSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
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

const DatosFinal: Model<any> =
  mongoose.models.DatosFinal || model("DatosFinal", datosfinalSchema);

export default DatosFinal;
