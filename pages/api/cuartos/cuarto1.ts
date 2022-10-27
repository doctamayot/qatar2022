import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";

import { PartidoAp, CuartoAp } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateCuartos(req, res);

    case "PATCH":
      return editCuartos(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const updateCuartos = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { resultado, _idoctavo } = req.body;

  const session: any = await getSession({ req });
  try {
    await db.connect();

    const cuarto: any = await CuartoAp.findById(_idoctavo).populate("partido");

    const partido = cuarto.partido;
    await partido.updateOne(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoSemis: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "61",
    });

    if (resultado === "local") {
      await partidoSemis[0].updateOne({ local: partido.local });
    }

    if (resultado === "visitante") {
      await partidoSemis[0].updateOne({ local: partido.visitante });
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

const editCuartos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
