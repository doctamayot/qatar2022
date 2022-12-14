import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { User, PartidoAp, FinalAp } from "../../models";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return final(req, res);

    case "PUT":
      return tercer(req, res);
  }
}

const final = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();
    const datosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "64",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const matrizAdmin: any = [
      datosAdmin[0].local.name,
      datosAdmin[0].visitante.name,
    ];

    const datosTodos: any = await FinalAp.find({ name: "Final" })
      .select("partido")
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .lean();

    for (const dato of datosTodos) {
      if (
        matrizAdmin.includes(dato.partido.local.name) &&
        matrizAdmin.includes(dato.partido.visitante.name)
      ) {
        await FinalAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 14 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 14 },
        });
      } else if (
        matrizAdmin.includes(dato.partido.local.name) ||
        matrizAdmin.includes(dato.partido.visitante.name)
      ) {
        await FinalAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 7 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 7 },
        });
      }
    }

    await db.disconnect();
    res.status(200).json({});
  } catch (error) {}
};

const tercer = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect();
    const datosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "63",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const matrizAdmin: any = [
      datosAdmin[0].local.name,
      datosAdmin[0].visitante.name,
    ];

    const datosTodos: any = await FinalAp.find({ name: "Tercer Puesto" })
      .select("partido")
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .lean();

    for (const dato of datosTodos) {
      if (
        matrizAdmin.includes(dato.partido.local.name) &&
        matrizAdmin.includes(dato.partido.visitante.name)
      ) {
        await FinalAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 12 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 12 },
        });
      } else if (
        matrizAdmin.includes(dato.partido.local.name) ||
        matrizAdmin.includes(dato.partido.visitante.name)
      ) {
        await FinalAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 6 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 6 },
        });
      }
    }

    await db.disconnect();
    res.status(200).json({});
  } catch (error) {}
};
