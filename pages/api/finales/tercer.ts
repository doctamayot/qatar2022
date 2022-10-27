import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { db } from "../../../database";

import { FinalAp, DatosFinal } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "PUT":
      return updateFinal(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const updateFinal = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { resultado, _idoctavo } = req.body;

  const session: any = await getSession({ req });
  try {
    await db.connect();

    const final: any = await FinalAp.findById(_idoctavo).populate("partido");

    const partido = final.partido;
    await partido.updateOne(req.body);

    //partido de cuartos al que pertenece este ganador
    const partidoTercer: any = await DatosFinal.find({
      user: session.user._id,
    });

    if (resultado === "local") {
      await partidoTercer[0].updateOne({ tercero: partido.local });
      await partidoTercer[0].updateOne({ cuarto: partido.visitante });
    }

    if (resultado === "visitante") {
      await partidoTercer[0].updateOne({ tercero: partido.visitante });
      await partidoTercer[0].updateOne({ cuarto: partido.local });
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
