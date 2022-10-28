import type { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "next-auth/react";

import { db } from "../../../database";

import { DatosFinal } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getGrupos(req, res);

    case "PUT":
      return updatePartido(req, res);

    case "PATCH":
      return editarPartido(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getGrupos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session: any = await getSession({ req });

  await db.connect();

  const datos = await DatosFinal.find({
    user: session.user._id,
  })
    .populate("campeon sub tercero cuarto")
    .lean();

  await db.disconnect();

  res.status(200).json(datos);
};

const updatePartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado, grupoid } = req.body;
  const session: any = await getSession({ req });

  try {
    await db.connect();

    //Actualiza el partido
    const extra: any = await DatosFinal.find({ user: session.user._id });

    await extra[0].updateOne(req.body);

    await db.disconnect();

    return res.status(200).json(extra);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editarPartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado } = req.body;

  const session: any = await getSession({ req });

  try {
    await db.connect();

    const extra: any = await DatosFinal.find({ user: session.user._id });

    await extra[0].updateOne({ jugado: false });

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
