import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";

import { Partido, Equipo, Grupo, Octavo, Cuarto, Semi } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getSemis(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updateSemis(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getSemis = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const semis = await Semi.find()
    // .sort({ titulo: "asc" })
    .populate("partido")
    .lean();

  await db.disconnect();

  res.status(200).json(semis);
};

const updateSemis = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { _id = "", resultado } = req.body;

  // if (!isValidObjectId(_id)) {
  //   return res.status(400).json({ message: "El id del producto no es válido" });
  // }

  // TODO: posiblemente tendremos un localhost:3000/product

  try {
    await db.connect();

    const partido: any = await Partido.findById(
      "634c0b80fa76e7502ea6de20" //61
    );
    const cuarto1: any = await Cuarto.findById(
      "634c0cc5fa76e7502ea6de26" //cuartos 1
    ).populate("ganador");

    const cuarto2: any = await Cuarto.findById(
      "634c0cc5fa76e7502ea6de27" //cuartos2
    ).populate("ganador");

    const semi: any = await Semi.findById(
      "634c14087426434671bb46a8" //Semi1
    ).populate("ganador");

    await partido.updateOne({
      $set: {
        local: cuarto1.ganador,
        visitante: cuarto2.ganador,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result, perdedor1;

    if (partido.resultado === "local") {
      result = cuarto1.ganador;
      perdedor1 = cuarto2.ganador;
    }

    if (partido.resultado === "visitante") {
      result = cuarto2.ganador;
      perdedor1 = cuarto1.ganador;
    }
    await semi.updateOne({
      $set: {
        ganador: result,
        perdedor: perdedor1,
      },
    });

    const semi2: any = await Semi.findById("634c14087426434671bb46a8").populate(
      "ganador partido"
    );

    await db.disconnect();

    return res.status(200).json(semi2);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
