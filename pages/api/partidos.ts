import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { PartidoAp } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPartidos(req, res);

    case "POST":
      return postPartidos(req, res);

    case "PUT":
      return switchUser(req, res);
  }
}

const getPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const partidos = await PartidoAp.find({ user: "635b78c1266ea8891e6efb23" })
    .select("nombre ronda")
    .populate("local visitante user")
    .lean();

  const users = await PartidoAp.find({ nombre: "1" })
    .populate("local visitante user")
    .sort({ puntos: -1, user: 1 })
    .lean();

  res.status(200).json({ partidos, users });
  await db.disconnect();
};

const postPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const users = await PartidoAp.find({ nombre: nomb })
    .populate("local visitante user")
    .sort({ puntos: -1, user: 1 })
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
