import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    activo: { type: Boolean, required: true },
    role: { type: String, required: true },
    posicion: { type: Number },

    partido: [
      {
        type: Schema.Types.ObjectId,
        ref: "Partido",
        autopopulate: true,
      },
    ],
    equipo: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipo",
        autopopulate: true,
      },
    ],
    cuarto: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cuarto",
        autopopulate: true,
      },
    ],
    final: [
      {
        type: Schema.Types.ObjectId,
        ref: "Final",
        autopopulate: true,
      },
    ],
    grupo: [
      {
        type: Schema.Types.ObjectId,
        ref: "Final",
        autopopulate: true,
      },
    ],
    octavo: [
      {
        type: Schema.Types.ObjectId,
        ref: "Octavo",
        autopopulate: true,
      },
    ],
    semi: [
      {
        type: Schema.Types.ObjectId,
        ref: "Semi",
        autopopulate: true,
      },
    ],
    extra: [
      {
        type: Schema.Types.ObjectId,
        ref: "Extra",
        autopopulate: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;
