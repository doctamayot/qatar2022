import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../database";
//import { IEquipo } from "../../interfaces";
import { Resultado } from "../../models";

type Data = { message: string } | any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getResultados(req, res);

    case "PUT":
      return crearResultado(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getResultados = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();

  const resultados = await Resultado.find()
    .sort({ createdAt: "asc" })
    .populate({
      path: "resultados.partido_id",
      populate: {
        path: "local visitante",
      },
    });

  await db.disconnect();

  res.status(200).json(resultados);
};

const crearResultado = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();

  const resultados = await Resultado.find()
    .sort({ createdAt: "asc" })
    .populate({
      path: "resultados.partido_id",
      populate: {
        path: "local visitante",
      },
    });

  await db.disconnect();

  res.status(200).json(resultados);
};
