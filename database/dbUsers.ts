import User from "../models/User";
import { db } from "./";

// Esta función crea o verifica el usuario de OAuth
export const oAUthToDbUser = async (oAuthEmail: string, oAuthName: string) => {
  await db.connect();
  const user = await User.findOne({ email: oAuthEmail });

  if (user) {
    await db.disconnect();
    const { _id, name, email, role, activo, empezado } = user;
    return { _id, name, email, role, activo, empezado };
  }

  const newUser = new User({
    email: oAuthEmail,
    name: oAuthName,
    role: "Cliente",
    activo: false,
    empezado: false,
  });
  await newUser.save();
  await db.disconnect();

  const { _id, name, email, role, activo, empezado } = newUser;
  return { _id, name, email, role, activo, empezado };
};
