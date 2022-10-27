import mongoose, { Schema, model, Model } from "mongoose";
import { IExtra } from "../interfaces";

const extraSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    extras: [
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

const Extra: Model<IExtra> =
  mongoose.models.Extra || model("Extra", extraSchema);

export default Extra;
