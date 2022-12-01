import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";

import { PartidoAp, CuartoAp, User } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateCuartos(req, res);

    case "PATCH":
      return editCuartos(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const updateCuartos = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { resultado, _idoctavo, nombre } = req.body;

  const session: any = await getSession({ req });
  try {
    await db.connect();

    const cuarto: any = await CuartoAp.findById(_idoctavo).populate("partido");

    const partido = cuarto.partido;
    await partido.updateOne(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoSemis: any = await PartidoAp.find({
      user: session.user._id,
      nombre: "61",
    });

    if (resultado === "local") {
      await partidoSemis[0].updateOne({ local: partido.local });
    }

    if (resultado === "visitante") {
      await partidoSemis[0].updateOne({ local: partido.visitante });
    }

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

    //console.log(req.body);

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editCuartos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { resultado, _id, nombre } = req.body;

  try {
    await db.connect();

    const partido: any = await PartidoAp.findById(_id);

    await partido.updateOne({ jugado: false });

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

    //partido de cuartos al que pertenece este ganador

    await db.disconnect();

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
