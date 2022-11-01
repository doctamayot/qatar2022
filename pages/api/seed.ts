import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "../../database";
//import { Resultado } from "../../models";
import {
  PartidoAp,
  SemiAp,
  OctavoAp,
  CuartoAp,
  EquipoAp,
  DatosFinal,
  GrupoAp,
  FinalAp,
} from "../../models";

type Data = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "No tiene acceso a este API" });
  }

  await db.connect();
  const usuario = "6361a76561185f0f078fd7a5";
  await PartidoAp.deleteMany({ user: usuario });
  await SemiAp.deleteMany({ user: usuario });
  await OctavoAp.deleteMany({ user: usuario });
  await CuartoAp.deleteMany({ user: usuario });
  await EquipoAp.deleteMany({ user: usuario });
  await DatosFinal.deleteMany({ user: usuario });
  await GrupoAp.deleteMany({ user: usuario });
  await FinalAp.deleteMany({ user: usuario });

  // await User.insertMany(seedDatabase.initialData.users);

  // await Equipo.deleteMany();
  // await PartidoAp.updateMany(
  //   { _v: 0 },
  //   {
  //     $set: {
  //       puntos: 0,
  //     },
  //   }
  // );

  //await Partido.updateMany({ _v: 0 }, { $set: { jugado: false } });

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
