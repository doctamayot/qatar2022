import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
import { Resultado } from "../../models";
import { Partido, Equipo, Grupo, Octavo } from "../../models";

type Data = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "No tiene acceso a este API" });
  }

  await db.connect();

  // await User.deleteMany();
  // await User.insertMany(seedDatabase.initialData.users);

  // await Equipo.deleteMany();
  await Equipo.updateMany(
    { _v: 0 },
    { $set: { golesfavor: 0, golescontra: 0, difgoles: 0, puntos: 0 } }
  );

  //await Partido.updateMany({ _v: 0 }, { $set: { ronda: "grupos" } });

  // await Resultado.deleteMany();
  // await Resultado.insertMany(seedDatabase.initialData.resultados);

  // await Grupo.deleteMany();
  // await Grupo.insertMany(seedDatabase.initialData.grupos);
  //await Grupo.insertMany(seedDatabase.initialData.grupos);
  // await Octavo.deleteMany();
  // await Octavo.insertMany(seedDatabase.initialData.octavos);

  // await Partido.deleteMany();
  //await Partido.insertMany(seedDatabase.initialData.partidos);

  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
