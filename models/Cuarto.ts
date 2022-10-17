import mongoose, { Schema, model, Model } from "mongoose";
import { ICuarto } from "../interfaces";

const cuartoSchema = new Schema(
  {
    name: { type: String, required: true },
    ganador: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      autopopulate: true,
    },
    partido: {
      type: Schema.Types.ObjectId,
      ref: "Partido",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cuarto: Model<ICuarto> =
  mongoose.models.Cuarto || model("Cuarto", cuartoSchema);

export default Cuarto;
