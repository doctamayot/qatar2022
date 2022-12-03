import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { DatosFinal, User, GrupoAp, PartidoAp, CuartoAp } from "../../models";

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

// const editPosicion = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { grupo } = req.body;

//   try {
//     await db.connect();
//     const posicionesAdmin: any = await GrupoAp.find({
//       user: "635b78c1266ea8891e6efb23",
//       name: grupo,
//     }).populate("posicion1 posicion2 posicion3 posicion4");

//     const posicionesTodos: any = await GrupoAp.find({ name: grupo }).populate(
//       "posicion1 posicion2 posicion3 posicion4 user"
//     );

//     for (const posicion of posicionesTodos) {
//       if (
//         posicion.posicion1.name === posicionesAdmin[0].posicion1.name &&
//         posicion.posicion2.name === posicionesAdmin[0].posicion2.name &&
//         posicion.posicion3.name === posicionesAdmin[0].posicion3.name &&
//         posicion.posicion4.name === posicionesAdmin[0].posicion4.name
//       ) {
//         await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
//         await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -13 } });
//       } else if (
//         (posicion.posicion1.name === posicionesAdmin[0].posicion1.name &&
//           posicion.posicion2.name === posicionesAdmin[0].posicion2.name) ||
//         (posicion.posicion1.name === posicionesAdmin[0].posicion2.name &&
//           posicion.posicion2.name === posicionesAdmin[0].posicion1.name)
//       ) {
//         await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
//         await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -6 } });
//       } else if (
//         posicion.posicion1.name === posicionesAdmin[0].posicion1.name ||
//         posicion.posicion1.name === posicionesAdmin[0].posicion2.name ||
//         posicion.posicion2.name === posicionesAdmin[0].posicion1.name ||
//         posicion.posicion2.name === posicionesAdmin[0].posicion2.name
//       ) {
//         await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
//         await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: -3 } });
//       } else {
//         await GrupoAp.findByIdAndUpdate(posicion._id, { $set: { puntos: 0 } });
//       }
//     }

//     await db.disconnect();
//     res.status(200).json(posicionesAdmin);
//   } catch (error) {}
// };

const getDatos = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const datosAdmin: any = await PartidoAp.find({
    user: "635b78c1266ea8891e6efb23",
    nombre: "57",
  })
    .populate("local visitante user")
    .sort({ partido: 1 })
    .lean();

  const datosAdmin2: any = await PartidoAp.find({
    user: "635b78c1266ea8891e6efb23",
    nombre: "58",
  })
    .populate("local visitante user")
    .sort({ partido: 1 })
    .lean();
  const datosAdmin3: any = await PartidoAp.find({
    user: "635b78c1266ea8891e6efb23",
    nombre: "59",
  })
    .populate("local visitante user")
    .sort({ partido: 1 })
    .lean();
  const datosAdmin4: any = await PartidoAp.find({
    user: "635b78c1266ea8891e6efb23",
    nombre: "60",
  })
    .populate("local visitante user")
    .sort({ partido: 1 })
    .lean();

  const matrizcuartos: any = [
    datosAdmin[0].local.bandera,
    datosAdmin2[0].local.bandera,
    datosAdmin3[0].local.bandera,
    datosAdmin4[0].local.bandera,
    datosAdmin[0].visitante.bandera,
    datosAdmin2[0].visitante.bandera,
    datosAdmin3[0].visitante.bandera,
    datosAdmin4[0].visitante.bandera,
  ];

  //console.log(matrizcuartos);

  const datosTodos: any = await CuartoAp.find()
    .populate({ path: "partido", populate: { path: "local visitante user" } })
    .sort({ puntoscuartos: -1, user: 1 })
    .lean();

  const datosTodos2: any = await PartidoAp.find({ nombre: "58" })
    .populate("local visitante user")
    .sort({ puntoscuartos: -1, user: 1 })
    .lean();
  const datosTodos3: any = await PartidoAp.find({ nombre: "59" })
    .populate("local visitante user")
    .sort({ puntoscuartos: -1, user: 1 })
    .lean();
  const datosTodos4: any = await PartidoAp.find({ nombre: "60" })
    .populate("local visitante user")
    .sort({ puntoscuartos: -1, user: 1 })
    .lean();

  let matrix = [];

  for (const dato of datosTodos) {
    matrix.push({
      user: dato.partido.user.name,
      local: dato.partido.local.bandera,
      visitante: dato.partido.visitante.bandera,
    });
  }

  //console.log(matrix);

  let nuevoObjeto: any = {};

  for (const p of matrix) {
    if (!nuevoObjeto.hasOwnProperty(p.user)) {
      nuevoObjeto[p.user] = [];
    }
    nuevoObjeto[p.user].push({
      local: p.local,
      visitante: p.visitante,
    });
  }

  let arreglo = Object.entries(nuevoObjeto);
  //console.log(arreglo);

  // const matrizcuartostodos: any = [
  //   datosTodos.local.bandera,
  //   datosTodos2.local.bandera,
  //   datosTodos3.local.bandera,
  //   datosTodos4.local.bandera,
  //   datosTodos.visitante.bandera,
  //   datosTodos2.visitante.bandera,
  //   datosTodos3.visitante.bandera,
  //   datosTodos4.visitante.bandera,
  // ];

  // const datosTodos = await CuartoAp.find({ name: "Cuartos 1" })
  //   .populate({ path: "partido", populate: { path: "local visitante" } })
  //   .sort({ user: 1 })
  //   .lean();

  //console.log(datosTodos);

  const jugadores = await User.find().sort({ puntos: -1 }).lean();

  res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  await db.disconnect();
};

const postPartidos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  console.log(nomb);
  await db.connect();
  const users = await PartidoAp.find({ nombre: nomb })
    .populate("local visitante user")
    .sort({ puntoscuartos: -1, user: 1 })
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
  const { nomb } = req.body;

  try {
    await db.connect();
    const posicionesAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: nomb,
    }).populate("local visitante user");

    const posicionesTodos: any = await PartidoAp.find({
      nombre: nomb,
    }).populate("local visitante user");

    for (const posicion of posicionesTodos) {
      if (
        posicion.local.name === posicionesAdmin[0].local.name &&
        posicion.visitante.name === posicionesAdmin[0].visitante.name
      ) {
        await PartidoAp.findByIdAndUpdate(posicion._id, {
          $set: { puntoscuartos: 8 },
        });
        //console.log(posicion.user);
        //await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: 8 } });
      } else if (
        posicion.local.name === posicionesAdmin[0].local.name ||
        posicion.visitante.name === posicionesAdmin[0].visitante.name
      ) {
        await PartidoAp.findByIdAndUpdate(posicion._id, {
          $set: { puntoscuartos: 4 },
        });
        //await User.findByIdAndUpdate(posicion.user, { $inc: { puntos: 4 } });
      }
    }

    await db.disconnect();
    res.status(200).json(posicionesAdmin);
  } catch (error) {}
};
