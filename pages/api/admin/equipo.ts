import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";



import { db } from "../../../database";
import { IEquipo } from "../../../interfaces";
import { Equipo } from "../../../models";

type Data = { message: string } | IEquipo[] | IEquipo;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEquipos(req, res);

   

    // case "PUT":
    //   return updateProduct(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getEquipos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const partidos = await Equipo.find()
    .sort({ createdAt: "asc" })
    
    .lean();

  await db.disconnect();

  

  res.status(200).json(partidos);
};