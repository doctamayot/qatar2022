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
    case "GET":
      return getOctavos(req, res);

    case "PUT":
      return updateOctavos(req, res);

    case "PATCH":
      return editOctavos(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getOctavos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const session: any = await getSession({ req });

  const octavos = await OctavoAp.find({ user: session.user._id })
    // .sort({ titulo: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  const cuartos = await CuartoAp.find({ user: session.user._id })
    // .sort({ titulo: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();
  const semis = await SemiAp.find({ user: session.user._id })
    // .sort({ titulo: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  const finales = await FinalAp.find({ user: session.user._id })
    // .sort({ titulo: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  await db.disconnect();

  res.status(200).json({ octavos, cuartos, semis, finales });
};

const updateOctavos = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { resultado, _idoctavo } = req.body;

  const session: any = await getSession({ req });
  try {
    await db.connect();

    const octavo: any = await OctavoAp.findById(_idoctavo).populate("partido");

    const partido = octavo.partido;
    await partido.updateOne(req.body);

    console.log(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoCuartos: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "57",
    });

    if (resultado === "local") {
      await partidoCuartos[0].updateOne({ visitante: partido.local });
    }

    if (resultado === "visitante") {
      await partidoCuartos[0].updateOne({ visitante: partido.visitante });
    }

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editOctavos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
