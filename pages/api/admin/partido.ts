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

    case "PUT":
      return updatePartido(req, res);

    case "PATCH":
      return deletePartido(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getPartidos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const partidos = await Partido.find({ grupo: "A" })
    .populate("local visitante")
    .lean();

  await db.disconnect();

  res.status(200).json(partidos);
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

    const partido: any = await Partido.findById(_id);

    //await partido.updateOne(req.body);
    if (partido.ronda === "grupos") {
      await partido.updateOne(req.body);
      const partido2: any = await Partido.findById(_id);

      const equipoLocal: any = await Equipo.findById(partido.local._id);
      const equipoVisitante: any = await Equipo.findById(partido.visitante._id);

      if (resultado === "local") {
        equipoLocal.puntos = equipoLocal.puntos + 3;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
      }

      if (resultado === "visitante") {
        equipoVisitante.puntos = equipoVisitante.puntos + 3;
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }

      if (resultado === "empate") {
        equipoVisitante.puntos = equipoVisitante.puntos + 1;
        equipoLocal.puntos = equipoLocal.puntos + 1;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }
      await equipoLocal.updateOne({
        // golesfavor: equipoLocal.golesfavor + partido.golocal,
        // golescontra: equipoLocal.golescontra + partido.golvisitante,
        // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
        $inc: {
          golesfavor: partido2.golocal,
          golescontra: partido2.golvisitante,
          difgoles: partido2.golocal - partido2.golvisitante,
        },
      });

      await equipoVisitante.updateOne({
        $inc: {
          golesfavor: partido2.golvisitante,
          golescontra: partido2.golocal,
          difgoles: partido2.golvisitante - partido2.golocal,
        },
      });
    } else {
      await partido.updateOne(req.body);
    }

    // console.log(equipoLocal.golesfavor);

    // const partUpdated = await Equipo.findByIdAndUpdate(
    //   partido.local._id,
    //   {
    //     puntos: "3",
    //   },

    //   { useFindAndModify: false }
    // );

    await db.disconnect();

    return res.status(200).json(partido);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
const deletePartido = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const { _id = "", jugado } = req.body;

  // if (!isValidObjectId(_id)) {
  //   return res.status(400).json({ message: "El id del producto no es válido" });
  // }

  // TODO: posiblemente tendremos un localhost:3000/product

  try {
    await db.connect();

    const partido: any = await Partido.findById(_id);

    if (partido.ronda === "grupos") {
      await partido.updateOne({ jugado: false });

      const partido2: any = await Partido.findById(_id);

      const equipoLocal: any = await Equipo.findById(partido.local._id);
      const equipoVisitante: any = await Equipo.findById(partido.visitante._id);

      if (partido2.resultado === "local") {
        equipoLocal.puntos = equipoLocal.puntos - 3;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
      }

      if (partido2.resultado === "visitante") {
        equipoVisitante.puntos = equipoVisitante.puntos - 3;
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }

      if (partido2.resultado === "empate") {
        equipoVisitante.puntos = equipoVisitante.puntos - 1;
        equipoLocal.puntos = equipoLocal.puntos - 1;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }
      await equipoLocal.updateOne({
        // golesfavor: equipoLocal.golesfavor + partido.golocal,
        // golescontra: equipoLocal.golescontra + partido.golvisitante,
        // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
        $inc: {
          golesfavor: -partido2.golocal,
          golescontra: -partido2.golvisitante,
          difgoles: -partido2.golocal + partido2.golvisitante,
        },
      });

      await equipoVisitante.updateOne({
        $inc: {
          golesfavor: -partido2.golvisitante,
          golescontra: -partido2.golocal,
          difgoles: -partido2.golvisitante + partido2.golocal,
        },
      });
    } else {
      await partido.updateOne({ jugado: false });
    }

    // console.log(equipoLocal.golesfavor);

    // const partUpdated = await Equipo.findByIdAndUpdate(
    //   partido.local._id,
    //   {
    //     puntos: "3",
    //   },

    //   { useFindAndModify: false }
    // );

    await db.disconnect();

    return res.status(200).json(partido);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
