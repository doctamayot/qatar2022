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
    // case "PATCH":
    //   return editPosicion(req, res);
  }
}

const getDatos = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const datosAdmin: any = await DatosFinal.find({
    user: "635b78c1266ea8891e6efb23",
  })
    .populate("campeon sub tercero cuarto user")
    .sort({ partido: 1 })
    .lean();

  const matrizcuartos: any = [
    datosAdmin[0].campeon.bandera,
    datosAdmin[0].sub.bandera,
    datosAdmin[0].tercero.bandera,
    datosAdmin[0].cuarto.bandera,
  ];

  //console.log(matrizcuartos);

  const datosTodos: any = await DatosFinal.find()
    .populate("campeon sub tercero cuarto user")
    .sort({ puntoscuartos: -1, user: 1 })
    .lean();

  let matrix = [];

  for (const dato of datosTodos) {
    matrix.push({
      user: dato.user.name,
      campeon: dato.campeon.bandera,
      sub: dato.sub.bandera,
      tercero: dato.tercero.bandera,
      cuarto: dato.cuarto.bandera,
      puntos: dato.puntoscampeon,
    });
  }

  //console.log(matrix);

  let nuevoObjeto: any = {};

  for (const p of matrix) {
    if (!nuevoObjeto.hasOwnProperty(p.user)) {
      nuevoObjeto[p.user] = [];
    }
    nuevoObjeto[p.user].push({
      campeon: p.campeon,
      sub: p.sub,
      tercero: p.tercero,
      cuarto: p.cuarto,
      puntos: p.puntos,
    });
  }

  let arreglo = Object.entries(nuevoObjeto);
  //console.log(arreglo);

  const jugadores = await User.find().sort({ puntos: -1 }).lean();

  res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  await db.disconnect();
};

const postPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const users = await DatosFinal.find()
    .select(`${nomb} puntoscampeon`)
    .populate("user campeon sub tercero cuarto")
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
    })
      .select("campeon sub tercero cuarto")
      .populate("campeon sub tercero cuarto user");

    const posicionesTodos: any = await DatosFinal.find()
      .select("campeon sub tercero cuarto user")
      .populate("campeon sub tercero cuarto user");

    //console.log(posicionesAdmin);

    for (const posicion of posicionesTodos) {
      if (
        posicion.campeon.name === posicionesAdmin[0].campeon.name &&
        posicion.sub.name === posicionesAdmin[0].sub.name
      ) {
        await DatosFinal.findByIdAndUpdate(posicion._id, {
          $set: { puntoscampeon: 17 },
        });
        await User.findByIdAndUpdate(posicion.user, {
          $inc: { puntos: 17 },
        });
      } else if (posicion.campeon.name === posicionesAdmin[0].campeon.name) {
        await DatosFinal.findByIdAndUpdate(posicion._id, {
          $set: { puntoscampeon: 10 },
        });
        await User.findByIdAndUpdate(posicion.user, {
          $inc: { puntos: 10 },
        });
      } else if (posicion.sub.name === posicionesAdmin[0].sub.name) {
        await DatosFinal.findByIdAndUpdate(posicion._id, {
          $set: { puntoscampeon: 7 },
        });
        await User.findByIdAndUpdate(posicion.user, {
          $inc: { puntos: 7 },
        });
      }
    }

    await db.disconnect();
    res.status(200).json(posicionesAdmin);
  } catch (error) {}
};
