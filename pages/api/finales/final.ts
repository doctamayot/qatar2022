import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";

import {
  Partido,
  Equipo,
  Grupo,
  Octavo,
  Cuarto,
  Semi,
  Final,
} from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getFinal(req, res);

    case "PATCH":
      return getResult(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updateFinal(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getFinal = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const tercer = await Final.find()
    // .sort({ titulo: "asc" })
    .populate({
      path: "partido",
      populate: { path: "local visitante" },
    })
    .lean();

  await db.disconnect();

  res.status(200).json(tercer);
};

const getResult = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const tercer = await Final.find()
    // .sort({ titulo: "asc" })
    .populate("campeon sub")
    .lean();

  await db.disconnect();

  res.status(200).json(tercer);
};

const updateFinal = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { _id = "", resultado } = req.body;

  // if (!isValidObjectId(_id)) {
  //   return res.status(400).json({ message: "El id del producto no es válido" });
  // }

  // TODO: posiblemente tendremos un localhost:3000/product

  try {
    await db.connect();

    const partido: any = await Partido.findById(
      "634c0b80fa76e7502ea6de23" //64
    );
    const semi1: any = await Semi.findById(
      "634c14087426434671bb46a8" //semi 1
    ).populate("ganador");

    const semi2: any = await Semi.findById(
      "634c14087426434671bb46a9" //cuartos2
    ).populate("ganador");

    const campeon: any = await Final.findById(
      "634c14e90b6a9502b357f140" //Final
    ).populate("ganador");

    // await partido.updateOne({
    //   $set: {
    //     local: semi1.ganador,
    //     visitante: semi2.ganador,
    //     // golocal: 0,
    //     // golvisitante: 0,
    //     // resultado: "nada",
    //   },
    // });

    let campeon1, subcampeon;

    if (partido.resultado === "local") {
      campeon1 = semi1.ganador;
      subcampeon = semi2.ganador;
    }

    if (partido.resultado === "visitante") {
      campeon1 = semi2.ganador;
      subcampeon = semi1.ganador;
    }
    await campeon.updateOne({
      $set: {
        campeon: campeon1,
        sub: subcampeon,
      },
    });

    const campeon2: any = await Final.findById(
      "634c14e90b6a9502b357f140"
    ).populate("campeon sub");

    await db.disconnect();

    return res.status(200).json(campeon2);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
