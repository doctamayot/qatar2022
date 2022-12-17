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
  User,
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
  //const usuario = "6361a76561185f0f078fd7a5";
  // await PartidoAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await SemiAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await OctavoAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await CuartoAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await EquipoAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await DatosFinal.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await GrupoAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });
  // await FinalAp.deleteMany({ user: "637933c5edf58e69cfb8e511" });

  // await User.insertMany(seedDatabase.initialData.users);

  // await Equipo.deleteMany();
  // await PartidoAp.updateMany(
  //   { nombre: "50" },

  //   {
  //     $set: {
  //       partido: 43,
  //       nombre: "43",
  //     },
  //   }
  // );

  // await EquipoAp.updateMany(
  //   { user: "635b78c1266ea8891e6efb23" },
  //   {
  //     $set: {
  //       puntos: 0,
  //       golesfavor: 0,
  //       golescontra: 0,
  //       difgoles: 0,
  //     },
  //   }
  // );

  await DatosFinal.updateMany(
    {},
    {
      $set: {
        puntoscampeon: 0,
      },
    }
  );

  // await PartidoAp.updateMany(
  //   { user: "635b78c1266ea8891e6efb23" },
  //   {
  //     $unset: {
  //       golocal: "",
  //       golvisitante: "",
  //     },
  //   }
  // );

  //await FinalAp.updateMany({}, { $set: { puntos: 0 } });
  //await FinalAp.updateMany({}, { $set: { puntos: 0 } });

  // await Resultado.insertMany(seedDatabase.initialData.resultados);

  //await GrupoAp.deleteMany({user:});
  // await Grupo.insertMany(seedDatabase.initialData.grupos);
  //await Grupo.insertMany(seedDatabase.initialData.grupos);
  // await Octavo.deleteMany();
  // await Octavo.insertMany(seedDatabase.initialData.octavos);

  // await Partido.deleteMany();
  //await Partido.insertMany(seedDatabase.initialData.partidos);

  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
