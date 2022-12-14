import type { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "next-auth/react";

import { db } from "../../../database";

import { PartidoAp, EquipoAp, GrupoAp, OctavoAp, User } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getGrupos(req, res);

    case "PUT":
      return updatePartido(req, res);

    case "PATCH":
      return editarPartido(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getGrupos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session: any = await getSession({ req });

  await db.connect();

  const grupos = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .lean();

  const partidos = await PartidoAp.find({ user: session.user._id, grupo: "F" })
    .populate("local visitante")
    .lean();

  await db.disconnect();

  res.status(200).json({ grupos, partidos });
};

const updatePartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado, grupoid, nombre } = req.body;

  await db.connect();

  //Actualiza el partido

  const partido: any = await PartidoAp.findById(_id);

  if (partido.ronda === "grupos") {
    await partido.updateOne(req.body);
    const partido2: any = await PartidoAp.findById(_id);

    const equipoLocal: any = await EquipoAp.findById(partido.local._id);
    const equipoVisitante: any = await EquipoAp.findById(partido.visitante._id);

    if (resultado === "local") {
      await equipoLocal.updateOne({
        $inc: {
          puntos: 3,
        },
      });
    }

    if (resultado === "visitante") {
      await equipoVisitante.updateOne({
        $inc: {
          puntos: 3,
        },
      });
    }

    if (resultado === "empate") {
      await equipoLocal.updateOne({
        $inc: {
          puntos: 1,
        },
      });
      await equipoVisitante.updateOne({
        $inc: {
          puntos: 1,
        },
      });
    }
    await equipoLocal.updateOne({
      $inc: {
        golesfavor: partido2.golocal,
        golescontra: partido2.golvisitante,
        difgoles: partido2.golocal - partido2.golvisitante,
      },
    });

    await equipoVisitante.updateOne({
      $inc: {
        golesfavor: partido2.golvisitante,
        golescontra: partido2.golocal,
        difgoles: partido2.golvisitante - partido2.golocal,
      },
    });
  } else {
    await partido.updateOne(req.body);
  }

  //Actualiza Grupo

  const grupo: any = await GrupoAp.findById(grupoid).populate("equipos");

  let porPuntos =
    grupo &&
    grupo.equipos.sort((a: any, b: any) => {
      if (a.puntos === b.puntos && a.difgoles === b.difgoles) {
        return a.golesfavor < b.golesfavor
          ? 1
          : a.golesfavor > b.golesfavor
          ? -1
          : 0;
      } else if (a.puntos === b.puntos) {
        return a.difgoles < b.difgoles ? 1 : a.difgoles > b.difgoles ? -1 : 0;
      } else {
        return a.puntos < b.puntos ? 1 : -1;
      }
    });

  await grupo.updateOne({
    $set: {
      posicion1: porPuntos[0],
      posicion2: porPuntos[1],
      posicion3: porPuntos[2],
      posicion4: porPuntos[3],
    },
  });

  //Actualiza los octavos

  const session: any = await getSession({ req });
  //Numero de partido de octavos
  const partidoOctavo: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "53",
  });

  //grupo del local octavos
  const grupo1: any = await GrupoAp.find({
    user: session.user._id,
    name: "E",
  }).populate("posicion1 posicion2 posicion3 posicion4");
  //grupo del visitante octavos
  const grupo2: any = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  //partido de cuartos al que pertenece el octavo
  const partido4: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "58",
  });
  //llama el modelo octavos
  const octavo: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 5",
  }).populate("ganador");
  //actualiza el local y visitante del partido de octavos 1
  await partidoOctavo[0].updateOne({
    $set: {
      local: grupo1[0].posicion1,
      visitante: grupo2[0].posicion2,
    },
  });

  let result;
  if (partido.resultado === "local") {
    result = grupo1.posicion1;
  }

  if (partido.resultado === "visitante") {
    result = grupo2.posicion2;
  }
  //actualiza el ganador del partido de  octavos 1
  await octavo[0].updateOne({
    $set: {
      ganador: result,
    },
  });
  //llama el ganador del partido de octavos 1
  const octavo2: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 5",
  }).populate("ganador");
  //actualiza el local del partido de cuartos
  await partido4[0].updateOne({
    $set: {
      local: octavo2[0].ganador,
    },
  });

  //Partido Octavos 2 al que pertenece el grupo
  const octavo3: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 7",
  }).populate("ganador");
  const grupo13: any = await GrupoAp.find({
    user: session.user._id,
    name: "E",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  const grupo23: any = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  //Partido octavos 2 al que pertenece el grupo
  const partido3: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "55",
  });

  await partido3[0].updateOne({
    $set: {
      local: grupo23[0].posicion1,
      visitante: grupo13[0].posicion2,
    },
  });

  let result3;
  if (partido3[0].resultado === "local") {
    result3 = grupo23.posicion1;
  }

  if (partido3[0].resultado === "visitante") {
    result3 = grupo13.posicion23;
  }
  //acualiza ganador partido octavos 2
  await octavo3[0].updateOne({
    $set: {
      ganador: result3,
    },
  });
  //llama partido de cuartos al que pertenece el octavo 2
  const partido43: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "60",
  });

  const octavo23: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 7",
  }).populate("ganador");

  await partido43[0].updateOne({
    $set: {
      local: octavo2.ganador,
    },
  });

  const partido23: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "55",
  });

  //Puntuacion //////////////////////////////////////////////////////////////////
  if (session.user._id === "635b78c1266ea8891e6efb23") {
    const partidosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      //grupo: "A",
      nombre: nombre,
    })
      // .populate("local visitante")
      .lean();

    const partidosTodos: any = await PartidoAp.find({
      // grupo: "A",
      nombre: nombre,
    })
      .populate("user")
      // .populate("local visitante")
      .lean();

    //console.log(partidosAdmin);

    for (const partido of partidosTodos) {
      if (
        partido.golocal === partidosAdmin[0].golocal &&
        partido.golvisitante === partidosAdmin[0].golvisitante
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 6 });

        await PartidoAp.updateOne({ _id: partido._id }, { puntos: 6 });

        await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 6 } });
      } else if (
        partido.resultado === partidosAdmin[0].resultado &&
        (partido.golocal === partidosAdmin[0].golocal ||
          partido.golvisitante === partidosAdmin[0].golvisitante)
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 3 });
        await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 3 } });
      } else if (partido.resultado === partidosAdmin[0].resultado) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 2 });
        await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 2 } });
      } else if (
        partido.golocal === partidosAdmin[0].golocal ||
        partido.golvisitante === partidosAdmin[0].golvisitante
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 1 });
        await User.findByIdAndUpdate(partido.user, { $inc: { puntos: 1 } });
      } else {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
      }
    }
  }
  await db.disconnect();

  return res.status(200).json(porPuntos);
};

const editarPartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado, nombre } = req.body;

  const session: any = await getSession({ req });

  await db.connect();

  const partido: any = await PartidoAp.findById(_id);

  if (partido.ronda === "grupos") {
    await partido.updateOne({ jugado: false });

    const partido2: any = await PartidoAp.findById(_id);

    const equipoLocal: any = await EquipoAp.findById(partido.local._id);
    const equipoVisitante: any = await EquipoAp.findById(partido.visitante._id);

    if (resultado === "local") {
      await equipoLocal.updateOne({
        $inc: {
          puntos: -3,
        },
      });
    }

    if (resultado === "visitante") {
      await equipoVisitante.updateOne({
        $inc: {
          puntos: -3,
        },
      });
    }

    if (resultado === "empate") {
      await equipoLocal.updateOne({
        $inc: {
          puntos: -1,
        },
      });
      await equipoVisitante.updateOne({
        $inc: {
          puntos: -1,
        },
      });
    }
    await equipoLocal.updateOne({
      $inc: {
        golesfavor: -partido2.golocal,
        golescontra: -partido2.golvisitante,
        difgoles: -partido2.golocal + partido2.golvisitante,
      },
    });

    await equipoVisitante.updateOne({
      $inc: {
        golesfavor: -partido2.golvisitante,
        golescontra: -partido2.golocal,
        difgoles: -partido2.golvisitante + partido2.golocal,
      },
    });
  } else {
    await partido.updateOne({ jugado: false });
  }

  const grupo: any = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  }).populate("equipos");

  let porPuntos = grupo[0].equipos.sort((a: any, b: any) => {
    if (a.puntos === b.puntos && a.difgoles === b.difgoles) {
      return a.golesfavor < b.golesfavor
        ? 1
        : a.golesfavor > b.golesfavor
        ? -1
        : 0;
    } else if (a.puntos === b.puntos) {
      return a.difgoles < b.difgoles ? 1 : a.difgoles > b.difgoles ? -1 : 0;
    } else {
      return a.puntos < b.puntos ? 1 : -1;
    }
  });

  await grupo[0].updateOne({
    $set: {
      posicion1: porPuntos[0],
      posicion2: porPuntos[1],
      posicion3: porPuntos[2],
      posicion4: porPuntos[3],
    },
  });

  const grupo1: any = await GrupoAp.find({
    user: session.user._id,
    name: "E",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  const grupo2: any = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  const partidoOctavo: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "53",
  }).populate("local");

  console.log(partidoOctavo[1]);

  const partido4: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "58",
  });

  const octavo: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 5",
  }).populate("ganador");

  await partidoOctavo[0].updateOne({
    $set: {
      local: grupo1[0].posicion1,
      visitante: grupo2[0].posicion2,
    },
  });

  let result;
  if (partido.resultado === "local") {
    result = grupo1[0].posicion1;
  }

  if (partido.resultado === "visitante") {
    result = grupo2[0].posicion2;
  }
  await octavo[0].updateOne({
    $set: {
      ganador: result,
    },
  });

  const octavo2: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 5",
  }).populate("ganador");

  await partido4[0].updateOne({
    $set: {
      local: octavo2[0].ganador,
    },
  });

  const partido2: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "55",
  });

  const partido5: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "60",
  });

  const grupo13: any = await GrupoAp.find({
    user: session.user._id,
    name: "E",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  const grupo23: any = await GrupoAp.find({
    user: session.user._id,
    name: "F",
  }).populate("posicion1 posicion2 posicion3 posicion4");

  const octavo3: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 7",
  }).populate("ganador");

  const partido3: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "55",
  });

  await partido3[0].updateOne({
    $set: {
      local: grupo23[0].posicion1,
      visitante: grupo13[0].posicion2,
    },
  });

  let result3;
  if (partido3.resultado === "local") {
    result3 = grupo23[0].posicion1;
  }

  if (partido3.resultado === "visitante") {
    result3 = grupo13[0].posicion23;
  }
  await octavo3[0].updateOne({
    $set: {
      ganador: result3,
    },
  });

  const partido43: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "60",
  });

  const octavo23: any = await OctavoAp.find({
    user: session.user._id,
    name: "Octavos 7",
  }).populate("ganador");

  await partido43[0].updateOne({
    $set: {
      local: octavo2[0].ganador,
    },
  });

  const partido23: any = await PartidoAp.find({
    user: session.user._id,
    nombre: "55",
  });

  //Puntuacion //////////////////////////////////////////////////////////////////
  if (session.user._id === "635b78c1266ea8891e6efb23") {
    const partidosAdmin: any = await PartidoAp.find({
      user: "635b78c1266ea8891e6efb23",
      //grupo: "A",
      nombre: nombre,
    })
      // .populate("local visitante")
      .lean();

    const partidosTodos: any = await PartidoAp.find({
      //grupo: "A",
      nombre: nombre,
    })
      .populate("user")
      // .populate("local visitante")
      .lean();

    for (const partido of partidosTodos) {
      // console.log("usuario", partido.golocal);
      // console.log("admin", partidosAdmin[0].golocal);
      if (
        partido.golocal === partidosAdmin[0].golocal &&
        partido.golvisitante === partidosAdmin[0].golvisitante
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        await User.findByIdAndUpdate(partido.user, {
          $inc: { puntos: -6 },
        });
      } else if (
        partido.resultado === partidosAdmin[0].resultado &&
        (partido.golocal === partidosAdmin[0].golocal ||
          partido.golvisitante === partidosAdmin[0].golvisitante)
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        await User.findByIdAndUpdate(partido.user, {
          $inc: { puntos: -3 },
        });
      } else if (partido.resultado === partidosAdmin[0].resultado) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        await User.findByIdAndUpdate(partido.user, {
          $inc: { puntos: -2 },
        });
      } else if (
        partido.golocal === partidosAdmin[0].golocal ||
        partido.golvisitante === partidosAdmin[0].golvisitante
      ) {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
        await User.findByIdAndUpdate(partido.user, {
          $inc: { puntos: -1 },
        });
      } else {
        await PartidoAp.findByIdAndUpdate(partido._id, { puntos: 0 });
      }
    }
  }
  await db.disconnect();

  return res.status(200).json(porPuntos);
};
