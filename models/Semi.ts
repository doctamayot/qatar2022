import mongoose, { Schema, model, Model } from "mongoose";
import { ISemi } from "../interfaces";

const semiSchema = new Schema(
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

const Semi: Model<ISemi> = mongoose.models.Semi || model("Semi", semiSchema);

export default Semi;
