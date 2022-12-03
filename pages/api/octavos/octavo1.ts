import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";

import {
  PartidoAp,
  GrupoAp,
  OctavoAp,
  CuartoAp,
  SemiAp,
  FinalAp,
  DatosFinal,
  User,
} from "../../../models";

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

    case "PATCH":
      return editOctavos(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getOctavos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const session: any = await getSession({ req });

  const octavos = await OctavoAp.find({ user: session.user._id })
    .sort({ name: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  const cuartos = await CuartoAp.find({ user: session.user._id })
    .sort({ name: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();
  const semis = await SemiAp.find({ user: session.user._id })
    .sort({ name: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  const finales = await FinalAp.find({ user: session.user._id })
    .sort({ name: "asc" })
    .populate({ path: "partido", populate: { path: "local visitante" } })
    .lean();

  const datosFinales = await DatosFinal.find({
    user: session.user._id,
  }).populate("campeon sub tercero cuarto");

  await db.disconnect();

  res.status(200).json({ octavos, cuartos, semis, finales, datosFinales });
};

const updateOctavos = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { resultado, _idoctavo, nombre } = req.body;

  console.log(req.body);

  // if (!isValidObjectId(_id)) {
  //   return res.status(400).json({ message: "El id del producto no es válido" });
  // }

  // TODO: posiblemente tendremos un localhost:3000/product
  const session: any = await getSession({ req });
  try {
    await db.connect();

    const octavo: any = await OctavoAp.findById(_idoctavo).populate("partido");

    const partido = octavo.partido;
    await partido.updateOne(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoCuartos: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "57",
    });

    if (resultado === "local") {
      await partidoCuartos[0].updateOne({ local: partido.local });
    }

    if (resultado === "visitante") {
      await partidoCuartos[0].updateOne({ local: partido.visitante });
    }

    //Puntuacion //////////////////////////////////////////////////////////////////

    if (session.user._id === "635b78c1266ea8891e6efb23") {
      const partidosAdmin: any = await PartidoAp.find({
        user: "635b78c1266ea8891e6efb23",
        //grupo: "A",
        nombre: nombre,
      })
        // .populate("local visitante")
        .lean();

      const partidosTodos: any = await PartidoAp.find({
        // grupo: "A",
        nombre: nombre,
      })
        .populate("user")
        // .populate("local visitante")
        .lean();

      //console.log(partidosAdmin);

      for (const partido of partidosTodos) {
        if (
          partido.golocal === partidosAdmin[0].golocal &&
          partido.golvisitante === partidosAdmin[0].golvisitante
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 6 });

          await PartidoAp.updateOne({ _id: partido._id }, { puntos: 6 });

          await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 6 } });
        } else if (
          partido.resultado === partidosAdmin[0].resultado &&
          (partido.golocal === partidosAdmin[0].golocal ||
            partido.golvisitante === partidosAdmin[0].golvisitante)
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 3 });
          await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 3 } });
        } else if (partido.resultado === partidosAdmin[0].resultado) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 2 });
          await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 2 } });
        } else if (
          partido.golocal === partidosAdmin[0].golocal ||
          partido.golvisitante === partidosAdmin[0].golvisitante
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 1 });
          await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 1 } });
        } else {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        }
      }
    }

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editOctavos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { resultado, _id, nombre } = req.body;
  const session: any = await getSession({ req });

  try {
    await db.connect();

    const partido: any = await PartidoAp.findById(_id);

    await partido.updateOne({ jugado: false });

    //Puntuacion //////////////////////////////////////////////////////////////////

    if (session.user._id === "635b78c1266ea8891e6efb23") {
      const partidosAdmin: any = await PartidoAp.find({
        user: "635b78c1266ea8891e6efb23",
        //grupo: "A",
        nombre: nombre,
      })
        // .populate("local visitante")
        .lean();

      const partidosTodos: any = await PartidoAp.find({
        //grupo: "A",
        nombre: nombre,
      })
        .populate("user")
        // .populate("local visitante")
        .lean();

      for (const partido of partidosTodos) {
        // console.log("usuario", partido.golocal);
        // console.log("admin", partidosAdmin[0].golocal);
        if (
          partido.golocal === partidosAdmin[0].golocal &&
          partido.golvisitante === partidosAdmin[0].golvisitante
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
          await User.findByIdAndUpdate(partido.user, {
            $inc: { puntos: -6 },
          });
        } else if (
          partido.resultado === partidosAdmin[0].resultado &&
          (partido.golocal === partidosAdmin[0].golocal ||
            partido.golvisitante === partidosAdmin[0].golvisitante)
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
          await User.findByIdAndUpdate(partido.user, {
            $inc: { puntos: -3 },
          });
        } else if (partido.resultado === partidosAdmin[0].resultado) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
          await User.findByIdAndUpdate(partido.user, {
            $inc: { puntos: -2 },
          });
        } else if (
          partido.golocal === partidosAdmin[0].golocal ||
          partido.golvisitante === partidosAdmin[0].golvisitante
        ) {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
          await User.findByIdAndUpdate(partido.user, {
            $inc: { puntos: -1 },
          });
        } else {
          await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        }
      }
    }

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
