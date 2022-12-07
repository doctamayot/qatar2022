import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import {
  DatosFinal,
  User,
  GrupoAp,
  PartidoAp,
  CuartoAp,
  SemiAp,
  FinalAp,
} from "../../models";

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

  let matrix = [];

  for (const dato of datosTodos) {
    matrix.push({
      user: dato.partido.user.name,
      local: dato.partido.local.bandera,
      visitante: dato.partido.visitante.bandera,
      puntos: dato.puntos,
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
  console.log(nomb);
  await db.connect();

  if (nomb === "cuartos") {
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

    let matrix = [];

    for (const dato of datosTodos) {
      matrix.push({
        user: dato.partido.user.name,
        local: dato.partido.local.bandera,
        visitante: dato.partido.visitante.bandera,
        puntos: dato.puntos,
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
        puntos: p.puntos,
      });
    }

    let arreglo = Object.entries(nuevoObjeto);
    //console.log(arreglo);

    const jugadores = await User.find().sort({ puntos: -1 }).lean();
    res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  } else if (nomb === "semis") {
    const datosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "61",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const datosAdmin2: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "62",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const matrizcuartos: any = [
      datosAdmin[0].local.bandera,
      datosAdmin2[0].local.bandera,
      datosAdmin[0].visitante.bandera,
      datosAdmin2[0].visitante.bandera,
    ];

    //console.log(matrizcuartos);

    const datosTodos: any = await SemiAp.find()
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .sort({ puntoscuartos: -1, user: 1 })
      .lean();

    let matrix = [];

    for (const dato of datosTodos) {
      matrix.push({
        user: dato.partido.user.name,
        local: dato.partido.local.bandera,
        visitante: dato.partido.visitante.bandera,
        puntos: dato.puntos,
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
        puntos: p.puntos,
      });
    }

    let arreglo = Object.entries(nuevoObjeto);
    //console.log(arreglo);

    const jugadores = await User.find().sort({ puntos: -1 }).lean();

    res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  } else if (nomb === "final") {
    const datosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "64",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const matrizcuartos: any = [
      datosAdmin[0].local.bandera,
      datosAdmin[0].visitante.bandera,
    ];

    //console.log(matrizcuartos);

    const datosTodos: any = await FinalAp.find({ name: "Final" })
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .sort({ puntoscuartos: -1, user: 1 })
      .lean();

    let matrix = [];

    for (const dato of datosTodos) {
      matrix.push({
        user: dato.partido.user.name,
        local: dato.partido.local.bandera,
        visitante: dato.partido.visitante.bandera,
        puntos: dato.puntos,
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
        puntos: p.puntos,
      });
    }

    let arreglo = Object.entries(nuevoObjeto);
    //console.log(arreglo);

    const jugadores = await User.find().sort({ puntos: -1 }).lean();

    res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  } else if (nomb === "tercer") {
    const datosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      nombre: "63",
    })
      .populate("local visitante user")
      .sort({ partido: 1 })
      .lean();

    const matrizcuartos: any = [
      datosAdmin[0].local.bandera,
      datosAdmin[0].visitante.bandera,
    ];

    //console.log(matrizcuartos);

    const datosTodos: any = await FinalAp.find({ name: "Tercer Puesto" })
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .sort({ puntoscuartos: -1, user: 1 })
      .lean();

    let matrix = [];

    for (const dato of datosTodos) {
      matrix.push({
        user: dato.partido.user.name,
        local: dato.partido.local.bandera,
        visitante: dato.partido.visitante.bandera,
        puntos: dato.puntos,
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
        puntos: p.puntos,
      });
    }

    let arreglo = Object.entries(nuevoObjeto);
    //console.log(arreglo);

    const jugadores = await User.find().sort({ puntos: -1 }).lean();

    res.status(200).json({ matrix, matrizcuartos, jugadores, arreglo });
  }

  await db.disconnect();
};

const putPosicion = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;

  try {
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
      datosAdmin[0].local.name,
      datosAdmin2[0].local.name,
      datosAdmin3[0].local.name,
      datosAdmin4[0].local.name,
      datosAdmin[0].visitante.name,
      datosAdmin2[0].visitante.name,
      datosAdmin3[0].visitante.name,
      datosAdmin4[0].visitante.name,
    ];

    //console.log(matrizcuartos);

    const datosTodos: any = await CuartoAp.find({ name: nomb })
      .select("partido")
      .populate({ path: "partido", populate: { path: "local visitante user" } })
      .sort({ puntoscuartos: -1, user: 1 })
      .lean();

    let matrix = [];

    //console.log(datosTodos);

    for (const dato of datosTodos) {
      if (
        matrizcuartos.includes(dato.partido.local.name) &&
        matrizcuartos.includes(dato.partido.visitante.name)
      ) {
        await CuartoAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 8 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 8 },
        });
      } else if (
        matrizcuartos.includes(dato.partido.local.name) ||
        matrizcuartos.includes(dato.partido.visitante.name)
      ) {
        await CuartoAp.findByIdAndUpdate(dato._id, {
          $set: { puntos: 4 },
        });
        await User.findByIdAndUpdate(dato.partido.user._id, {
          $inc: { puntos: 4 },
        });
      }
    }

    await db.disconnect();
    res.status(200).json({});
  } catch (error) {}
};
