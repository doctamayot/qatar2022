import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";
import { IPartido } from "../../../interfaces";
import { Partido, Equipo } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPartidos(req, res);

    // case "POST":
    //   return createPartido(req, res);

    // case "PUT":
    //   return updatePartido(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getPartidos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const partidos = await Partido.find({ grupo: "D" })
    .populate("local visitante")
    .lean();

  await db.disconnect();

  res.status(200).json(partidos);
};
