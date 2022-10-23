import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";

import { Partido, Equipo, Grupo, Octavo, Cuarto } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getCuartos(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updateCuartos(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getCuartos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const cuartos = await Cuarto.find()
    // .sort({ titulo: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  await db.disconnect();

  res.status(200).json(cuartos);
};

const updateCuartos = async (
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

    const partido: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1f" //60
    );
    const octavo1: any = await Octavo.findById(
      "634b433d1a57fda6d09dec91" //octavos 7
    ).populate("ganador");

    const octavo2: any = await Octavo.findById(
      "634b433d1a57fda6d09dec92" //octavos8
    ).populate("ganador");

    const cuarto1: any = await Cuarto.findById(
      "634c0cc5fa76e7502ea6de29" //cuartos4
    ).populate("ganador");

    await partido.updateOne({
      $set: {
        local: octavo1.ganador,
        visitante: octavo2.ganador,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result;
    if (partido.resultado === "local") {
      result = octavo1.ganador;
    }

    if (partido.resultado === "visitante") {
      result = octavo2.ganador;
    }
    await cuarto1.updateOne({
      $set: {
        ganador: result,
      },
    });

    const cuarto2: any = await Cuarto.findById(
      "634c0cc5fa76e7502ea6de29"
    ).populate("ganador partido");

    const partido4: any = await Partido.findById(
      "634c0b80fa76e7502ea6de21" //61
    );

    await partido4.updateOne({
      $set: {
        visitante: cuarto2.ganador,

        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    await db.disconnect();

    return res.status(200).json(cuarto2);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
