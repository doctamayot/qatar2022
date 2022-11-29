import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { PartidoAp, User, GrupoAp } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPosiciones(req, res);

    case "POST":
      return postPartidos(req, res);

    case "PUT":
      return switchUser(req, res);
    case "PATCH":
      return nombrepartido(req, res);
  }
}

const nombrepartido = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const users = await PartidoAp.find({ nombre: nomb }).lean();

  const numero = parseInt(nomb);
  const partidos = await PartidoAp.updateMany(
    { nombre: nomb },
    { $set: { partido: numero } }
  );
  //   .select("nombre ronda")
  //   .populate("local visitante user")
  //   .lean();

  res.status(200).json(partidos);
  await db.disconnect();
};

const getPosiciones = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const posiciones = await GrupoAp.find({ user: "635b78c1266ea8891e6efb23" })
    .populate("posicion1 posicion2 posicion3 posicion4 user")
    .sort({ name: 1 })
    .lean();

  const users = await GrupoAp.find({ name: "A" })
    .populate("posicion1 posicion2 posicion3 posicion4 user")
    .sort({ puntos: -1, user: 1 })
    .lean();

  const jugadores = await User.find().sort({ puntos: -1 }).lean();

  res.status(200).json({ posiciones, users, jugadores });
  await db.disconnect();
};

const postPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const users = await GrupoAp.find({ name: nomb })
    .populate("posicion1 posicion2 posicion3 posicion4 user")
    .sort({ puntos: -1 })
    .lean();
  // const partidos = await PartidoAp.find({ user: "635b78c1266ea8891e6efb23" })
  //   .select("nombre ronda")
  //   .populate("local visitante user")
  //   .lean();

  res.status(200).json(users);
  await db.disconnect();
};

const switchUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, isActive } = req.body;
  console.log(req.body);

  try {
    await db.connect();
    const users = await PartidoAp.findByIdAndUpdate(_id, {
      activo: isActive,
    });

    await db.disconnect();
    res.status(200).json(users);
  } catch (error) {}
};
