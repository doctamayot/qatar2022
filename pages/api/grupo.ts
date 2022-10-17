import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../database";

import { Partido, Equipo, Grupo, Octavo } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getGrupos(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updatePartido(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getGrupos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const grupos = await Grupo.find({ name: "A" })
    // .sort({ titulo: "asc" })
    // .populate("equipos partidos")
    .lean();

  await db.disconnect();

  res.status(200).json(grupos);
};

const updatePartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado } = req.body;

  // if (!isValidObjectId(_id)) {
  //   return res.status(400).json({ message: "El id del producto no es válido" });
  // }

  // TODO: posiblemente tendremos un localhost:3000/product

  try {
    await db.connect();
    const grupo: any = await Grupo.findById(
      "634b3d06056ab725a4e93acc"
    ).populate("equipos");

    let porPuntos = grupo.equipos.sort((a: any, b: any) => {
      if (a.puntos === b.puntos) {
        return a.difgoles < a.difgoles ? -1 : 1;
      } else {
        return a.puntos < b.puntos ? 1 : -1;
      }
    });

    await grupo.updateOne({
      // golesfavor: equipoLocal.golesfavor + partido.golocal,
      // golescontra: equipoLocal.golescontra + partido.golvisitante,
      // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
      $set: {
        posicion1: porPuntos[0],
        posicion2: porPuntos[1],
        posicion3: porPuntos[2],
        posicion4: porPuntos[3],
      },
    });

    //grupo.posicion1 = porPuntos[1];

    await db.disconnect();

    return res.status(200).json(porPuntos);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
