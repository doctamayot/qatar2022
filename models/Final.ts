import mongoose, { Schema, model, Model } from "mongoose";
import { IFinal } from "../interfaces";

const finalSchema = new Schema(
  {
    name: { type: String, required: true },
    partidos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Partido",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Final: Model<IFinal> =
  mongoose.models.Final || model("Final", finalSchema);

export default Final;
