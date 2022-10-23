import mongoose, { Schema, model, Model } from "mongoose";
import { IFinal } from "../interfaces";

const finalSchema = new Schema(
  {
    name: { type: String, required: true },
    ganador: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    perdedor: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    partido: {
      type: Schema.Types.ObjectId,
      ref: "Partido",
      autopopulate: true,
    },
    campeon: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    sub: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    tercero: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },

    cuarto: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

const Final: Model<IFinal> =
  mongoose.models.Final || model("Final", finalSchema);

export default Final;
