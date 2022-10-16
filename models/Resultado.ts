import mongoose, { Schema, model, Model } from "mongoose";
import { IPartido } from "../interfaces/partido";

const resultadoSchema = new Schema(
  {
    //user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    resultados: [
      {
        partido_id: {
          type: Schema.Types.ObjectId,
          ref: "Partido",
          required: true,
          autopopulate: true,
        },
        golocal: { type: Number },
        golvisitante: { type: Number },
        resultado: { type: String },
      },
    ],
    //numberOfItems: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Resultado: Model<IPartido> =
  mongoose.models.Resultado || model("Resultado", resultadoSchema);

export default Resultado;
