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
  // await PartidoAp.deleteMany({ user: null });
  // await SemiAp.deleteMany({ user: null });
  // await OctavoAp.deleteMany({ user: null });
  // await CuartoAp.deleteMany({ user: null });
  // await EquipoAp.deleteMany({ user: null });
  // await DatosFinal.deleteMany({ user: null });
  // await GrupoAp.deleteMany({ user: null });
  // await FinalAp.deleteMany({ user: null });

  // await User.insertMany(seedDatabase.initialData.users);

  // await Equipo.deleteMany();
  await PartidoAp.updateMany(
    { _v: 0 },
    {
      $set: {
        puntos: 0,
      },
    }
  );

  await User.updateMany(
    { role: "Cliente" },
    {
      $set: {
        puntos: 0,
      },
    }
  );

  await PartidoAp.updateMany(
    { user: "635b78c1266ea8891e6efb23" },
    {
      $unset: {
        golocal: "",
        golvisitante: "",
      },
    }
  );

  //await Partido.updateMany({ _v: 0 }, { $set: { jugado: false } });

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
