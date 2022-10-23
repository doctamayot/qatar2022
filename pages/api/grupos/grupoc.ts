import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";

import { Partido, Equipo, Grupo, Octavo } from "../../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getGrupos(req, res);

    // case "POST":
    //   return createPartido(req, res);

    case "PUT":
      return updatePartido(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    case "PATCH":
      return editarPartido(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getGrupos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const grupos = await Grupo.find({ name: "C" })
    // .sort({ titulo: "asc" })
    .populate("equipos partidos posicion1 posicion2 posicion3 posicion4")
    .lean();

  const partidos = await Partido.find({ grupo: "C" })
    .populate("local visitante")
    .lean();

  await db.disconnect();

  res.status(200).json({ grupos, partidos });
};

const updatePartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado } = req.body;

  try {
    await db.connect();

    //Partido
    const partido: any = await Partido.findById(_id);

    //await partido.updateOne(req.body);
    if (partido.ronda === "grupos") {
      await partido.updateOne(req.body);
      const partido2: any = await Partido.findById(_id);

      const equipoLocal: any = await Equipo.findById(partido.local._id);
      const equipoVisitante: any = await Equipo.findById(partido.visitante._id);

      if (resultado === "local") {
        equipoLocal.puntos = equipoLocal.puntos + 3;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
      }

      if (resultado === "visitante") {
        equipoVisitante.puntos = equipoVisitante.puntos + 3;
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }

      if (resultado === "empate") {
        equipoVisitante.puntos = equipoVisitante.puntos + 1;
        equipoLocal.puntos = equipoLocal.puntos + 1;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }
      await equipoLocal.updateOne({
        // golesfavor: equipoLocal.golesfavor + partido.golocal,
        // golescontra: equipoLocal.golescontra + partido.golvisitante,
        // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
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

    //Grupo

    const grupo: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace"
    ).populate("equipos");

    let porPuntos = grupo.equipos.sort((a: any, b: any) => {
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

    //Octavos
    const grupo1: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace" //A
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const grupo2: any = await Grupo.findById(
      "634b3d06056ab725a4e93acf" //B
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const partidoOctavo: any = await Partido.findById(
      "634b40fe851f8db62de95ee0" //49
    );

    const partido4: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1c" //57
    );
    const octavo: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8c"
    ).populate("ganador");

    await partidoOctavo.updateOne({
      $set: {
        local: grupo1.posicion1,
        visitante: grupo2.posicion2,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result;
    if (partido.resultado === "local") {
      result = grupo1.posicion1;
    }

    if (partido.resultado === "visitante") {
      result = grupo2.posicion2;
    }
    await octavo.updateOne({
      $set: {
        ganador: result,
      },
    });

    const octavo2: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8c"
    ).populate("ganador");

    await partido4.updateOne({
      $set: {
        visitante: octavo2.ganador,

        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    const partido2: any = await Partido.findById(
      "634b40fe851f8db62de95ee0" //49
    );

    const partido5: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1c" //57
    );

    //octavo2

    const grupo13: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace" //A
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const grupo23: any = await Grupo.findById(
      "634b3d06056ab725a4e93acf" //B
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const octavo3: any = await Octavo.findById("634b433d1a57fda6d09dec8e");

    const partido3: any = await Partido.findById(
      "634b40fe851f8db62de95ee2" //51
    );

    await partido3.updateOne({
      $set: {
        local: grupo23.posicion1,
        visitante: grupo13.posicion2,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result3;
    if (partido3.resultado === "local") {
      result3 = grupo23.posicion1;
    }

    if (partido3.resultado === "visitante") {
      result3 = grupo13.posicion23;
    }
    await octavo3.updateOne({
      $set: {
        ganador: result3,
      },
    });

    const partido43: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1e" //59
    );

    const octavo23: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8e"
    ).populate("ganador");

    await partido43.updateOne({
      $set: {
        visitante: octavo2.ganador,
      },
    });

    const partido23: any = await Partido.findById(
      "634b40fe851f8db62de95ee2" //51
    ).populate("local visitante");

    await db.disconnect();

    return res.status(200).json(porPuntos);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};

const editarPartido = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = "", resultado } = req.body;

  try {
    await db.connect();

    //Partido
    const partido: any = await Partido.findById(_id);

    if (partido.ronda === "grupos") {
      await partido.updateOne({ jugado: false });

      const partido2: any = await Partido.findById(_id);

      const equipoLocal: any = await Equipo.findById(partido.local._id);
      const equipoVisitante: any = await Equipo.findById(partido.visitante._id);

      if (partido2.resultado === "local") {
        equipoLocal.puntos = equipoLocal.puntos - 3;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
      }

      if (partido2.resultado === "visitante") {
        equipoVisitante.puntos = equipoVisitante.puntos - 3;
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }

      if (partido2.resultado === "empate") {
        equipoVisitante.puntos = equipoVisitante.puntos - 1;
        equipoLocal.puntos = equipoLocal.puntos - 1;
        await equipoLocal.updateOne({ puntos: equipoLocal.puntos });
        await equipoVisitante.updateOne({ puntos: equipoVisitante.puntos });
      }
      await equipoLocal.updateOne({
        // golesfavor: equipoLocal.golesfavor + partido.golocal,
        // golescontra: equipoLocal.golescontra + partido.golvisitante,
        // difgoles: equipoLocal.golesfavor - equipoLocal.golescontra,
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

    //Grupo

    const grupo: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace"
    ).populate("equipos");

    let porPuntos = grupo.equipos.sort((a: any, b: any) => {
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

    //Octavos
    const grupo1: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace" //A
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const grupo2: any = await Grupo.findById(
      "634b3d06056ab725a4e93acf" //B
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const partidoOctavo: any = await Partido.findById(
      "634b40fe851f8db62de95ee0" //49
    );

    const partido4: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1c" //57
    );
    const octavo: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8c"
    ).populate("ganador");

    await partidoOctavo.updateOne({
      $set: {
        local: grupo1.posicion1,
        visitante: grupo2.posicion2,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result;
    if (partido.resultado === "local") {
      result = grupo1.posicion1;
    }

    if (partido.resultado === "visitante") {
      result = grupo2.posicion2;
    }
    await octavo.updateOne({
      $set: {
        ganador: result,
      },
    });

    const octavo2: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8c"
    ).populate("ganador");

    await partido4.updateOne({
      $set: {
        visitante: octavo2.ganador,

        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    const partido2: any = await Partido.findById(
      "634b40fe851f8db62de95ee0" //49
    );

    const partido5: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1c" //57
    );

    //octavo2

    const grupo13: any = await Grupo.findById(
      "634b3d06056ab725a4e93ace" //A
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const grupo23: any = await Grupo.findById(
      "634b3d06056ab725a4e93acf" //B
    ).populate("posicion1 posicion2 posicion3 posicion4");

    const octavo3: any = await Octavo.findById("634b433d1a57fda6d09dec8e");

    const partido3: any = await Partido.findById(
      "634b40fe851f8db62de95ee2" //51
    );

    await partido3.updateOne({
      $set: {
        local: grupo23.posicion1,
        visitante: grupo13.posicion2,
        // golocal: 0,
        // golvisitante: 0,
        // resultado: "nada",
      },
    });

    let result3;
    if (partido3.resultado === "local") {
      result3 = grupo23.posicion1;
    }

    if (partido3.resultado === "visitante") {
      result3 = grupo13.posicion23;
    }
    await octavo3.updateOne({
      $set: {
        ganador: result3,
      },
    });

    const partido43: any = await Partido.findById(
      "634c0b80fa76e7502ea6de1e" //59
    );

    const octavo23: any = await Octavo.findById(
      "634b433d1a57fda6d09dec8e"
    ).populate("ganador");

    await partido43.updateOne({
      $set: {
        visitante: octavo2.ganador,
      },
    });

    const partido23: any = await Partido.findById(
      "634b40fe851f8db62de95ee2" //51
    ).populate("local visitante");

    await db.disconnect();

    return res.status(200).json(porPuntos);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: "Revisar la consola del servidor" });
  }
};
