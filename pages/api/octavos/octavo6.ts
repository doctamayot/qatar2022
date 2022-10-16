import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";

import { Partido, Equipo, Grupo, Octavo } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getOctavos(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updateOctavos(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getOctavos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const octavos = await Octavo.find()
    // .sort({ titulo: "asc" })
    .populate("partido")
    .lean();

  await db.disconnect();

  res.status(200).json(octavos);
};

const updateOctavos = async (
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
    const grupo1: any = await Grupo.findById(
      "634b3d06056ab725a4e93ad2" //g
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const grupo2: any = await Grupo.findById(
      "634b3d06056ab725a4e93ad3" //h
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const octavo: any = await Octavo.findById(
      "634b433d1a57fda6d09dec90"
    ).populate("partido");

    const partido: any = await Partido.findById(
      "634b40fe851f8db62de95ee4" //54
    );

    await partido.updateOne({
      $set: {
        local: grupo1.posicion1,
        visitante: grupo2.posicion2,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result = "empate";
    if (partido.resultado === "local") {
      result = grupo1.posicion1;
    }

    if (partido.resultado === "visitante") {
      result = grupo2.posicion2;
    }
    await octavo.updateOne({
      $set: {
        ganador: result,
      },
    });

    const partido2: any = await Partido.findById(
      "634b40fe851f8db62de95ee4" //53
    ).populate("local visitante");

    // await grupo.updateOne({
    //   // golesfavor: equipoLocal.golesfavor + partido.golocal,
    //   // golescontra: equipoLocal.golescontra + partido.golvisitante,
    //   // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
    //   $set: {
    //     posicion1: porPuntos[0],
    //     posicion2: porPuntos[1],
    //     posicion3: porPuntos[2],
    //     posicion4: porPuntos[3],
    //   },
    // });

    await db.disconnect();

    return res.status(200).json(partido2);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
