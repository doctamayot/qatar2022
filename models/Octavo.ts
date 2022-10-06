import mongoose, { Schema, model, Model } from "mongoose";
import { IOctavo } from "../interfaces";

const octavoSchema = new Schema(
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

const Octavo: Model<IOctavo> =
  mongoose.models.Octavo || model("Octavo", octavoSchema);

export default Octavo;
