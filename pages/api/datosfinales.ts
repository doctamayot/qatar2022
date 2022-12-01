import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { DatosFinal, User, GrupoAp, OctavoAp } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getDatos(req, res);

    case "POST":
      return postPartidos(req, res);

    case "PUT":
      return putPosicion(req, res);
    case "PATCH":
      return editPosicion(req, res);
  }
}

const editPosicion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { grupo } = req.body;

  try {
    await db.connect();
    const posicionesAdmin: any = await GrupoAp.find({
      user: "635b78c1266ea8891e6efb23",
      name: grupo,
    }).populate("posicion1 posicion2 posicion3 posicion4");

    const posicionesTodos: any = await GrupoAp.find({ name: grupo }).populate(
      "posicion1 posicion2 posicion3 posicion4 user"
    );

    for (const posicion of posicionesTodos) {
      if (
        posicion.posicion1.name === posicionesAdmin[0].posicion1.name &&
        posicion.posicion2.name === posicionesAdmin[0].posicion2.name &&
        posicion.posicion3.name === posicionesAdmin[0].posicion3.name &&
        posicion.posicion4.name === posicionesAdmin[0].posicion4.name
      ) {
        await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
        await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -13 } });
      } else if (
        (posicion.posicion1.name === posicionesAdmin[0].posicion1.name &&
          posicion.posicion2.name === posicionesAdmin[0].posicion2.name) ||
        (posicion.posicion1.name === posicionesAdmin[0].posicion2.name &&
          posicion.posicion2.name === posicionesAdmin[0].posicion1.name)
      ) {
        await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
        await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -6 } });
      } else if (
        posicion.posicion1.name === posicionesAdmin[0].posicion1.name ||
        posicion.posicion1.name === posicionesAdmin[0].posicion2.name ||
        posicion.posicion2.name === posicionesAdmin[0].posicion1.name ||
        posicion.posicion2.name === posicionesAdmin[0].posicion2.name
      ) {
        await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
        await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -3 } });
      } else {
        await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
      }
    }

    await db.disconnect();
    res.status(200).json(posicionesAdmin);
  } catch (error) {}
};

const getDatos = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const datosAdmin = await DatosFinal.find({
    user: "635b78c1266ea8891e6efb23",
  })
    .select(
      "goleador amarillas grupomasgoles grupomenosgoles masgoles masvencida menosgoles rojas menosvencida -_id"
    )
    .lean();
  //.populate("campeon sub tercero cuarto user")

  const datosTodos = await DatosFinal.find()
    .select(
      "goleador amarillas grupomasgoles grupomenosgoles masgoles masvencida menosgoles rojas menosvencida puntos"
    )
    .populate("user")
    .sort({ puntos: -1, user: 1 })
    .lean();

  //console.log(datosAdmin);

  const jugadores = await User.find().sort({ puntos: -1 }).lean();

  res.status(200).json({ datosAdmin, datosTodos, jugadores });
  await db.disconnect();
};

const postPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const users = await DatosFinal.find()
    .select(`${nomb} puntos`)
    .populate("user")
    .sort({ puntos: -1 })
    .lean();
  // const partidos = await PartidoAp.find({ user: "635b78c1266ea8891e6efb23" })
  //   .select("nombre ronda")
  //   .populate("local visitante user")
  //   .lean();
  //console.log(users);
  res.status(200).json(users);
  await db.disconnect();
};

const putPosicion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { extra } = req.body;

  try {
    await db.connect();
    const posicionesAdmin: any = await DatosFinal.find({
      user: "635b78c1266ea8891e6efb23",
    }).select(`${extra}`);

    const posicionesTodos: any = await DatosFinal.find().select(`${extra}`);

    for (const posicion of posicionesTodos) {
      if (posicion[extra] === posicionesAdmin[0][extra]) {
        await DatosFinal.findByIdAndUpdate(posicion._id, {
          $inc: { puntos: 5 },
        });
        await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: 5 } });
      }
    }

    await db.disconnect();
    res.status(200).json(posicionesAdmin);
  } catch (error) {}
};
