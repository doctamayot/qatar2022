import mongoose, { Schema, model, Model } from "mongoose";
import { IGrupo } from "../interfaces";

const grupoSchema = new Schema(
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

const Grupo: Model<IGrupo> =
  mongoose.models.Grupo || model("Grupo", grupoSchema);

export default Grupo;
