import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { EquipoAp } from "../../models";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEquipos(req, res);
  }
}

async function getEquipos(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    await db.connect();
    const equipos: any = await EquipoAp.find();
    await db.disconnect();
    res.status(200).json(equipos);
  } catch (error) {}
}
