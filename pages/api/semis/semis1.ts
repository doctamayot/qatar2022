import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";

import {
  PartidoAp,
  GrupoAp,
  OctavoAp,
  CuartoAp,
  SemiAp,
  FinalAp,
} from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateSemis(req, res);

    case "PATCH":
      return editSemis(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const updateSemis = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { resultado, _idoctavo } = req.body;

  const session: any = await getSession({ req });
  try {
    await db.connect();

    const semi: any = await SemiAp.findById(_idoctavo).populate("partido");

    const partido = semi.partido;
    await partido.updateOne(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoTercer: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "63",
    });

    const partidoFinal: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "64",
    });

    if (resultado === "local") {
      await partidoTercer[0].updateOne({ local: partido.visitante });
      await partidoFinal[0].updateOne({ local: partido.local });
    }

    if (resultado === "visitante") {
      await partidoTercer[0].updateOne({ local: partido.local });
      await partidoFinal[0].updateOne({ local: partido.visitante });
    }

    //console.log(req.body);

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editSemis = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { resultado, _id } = req.body;

  try {
    await db.connect();

    const partido: any = await PartidoAp.findById(_id);

    await partido.updateOne({ jugado: false });

    //partido de cuartos al que pertenece este ganador

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
