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

    case "PUT":
      return switchUser(req, res);
  }
}

const getPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  console.log(nomb);
  await db.connect();
  const users = await PartidoAp.find({ nombre: nomb })
    .populate("local visitante user")
    .lean();

  await db.disconnect();
  res.status(200).json(users);
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
