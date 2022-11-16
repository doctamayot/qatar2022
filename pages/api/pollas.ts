import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { PartidoAp, User, GrupoAp, DatosFinal } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPollas(req, res);

    case "POST":
      return postPollas(req, res);
  }
}

const getPollas = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();

  const polleros = await User.find();

  res.status(200).json({
    polleros,
  });
  await db.disconnect();
};

const postPollas = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nomb } = req.body;
  //console.log(nomb);
  await db.connect();
  const grupoa = await PartidoAp.find({ user: nomb, grupo: "A" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupob = await PartidoAp.find({ user: nomb, grupo: "B" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupoc = await PartidoAp.find({ user: nomb, grupo: "C" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupod = await PartidoAp.find({ user: nomb, grupo: "D" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupoe = await PartidoAp.find({ user: nomb, grupo: "E" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupof = await PartidoAp.find({ user: nomb, grupo: "F" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupog = await PartidoAp.find({ user: nomb, grupo: "G" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const grupoh = await PartidoAp.find({ user: nomb, grupo: "H" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupoa = await GrupoAp.find({ user: nomb, name: "A" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupob = await GrupoAp.find({ user: nomb, name: "B" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupoc = await GrupoAp.find({ user: nomb, name: "C" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupod = await GrupoAp.find({ user: nomb, name: "D" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupoe = await GrupoAp.find({ user: nomb, name: "E" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupof = await GrupoAp.find({ user: nomb, name: "F" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupog = await GrupoAp.find({ user: nomb, name: "G" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  const posgrupoh = await GrupoAp.find({ user: nomb, name: "H" })
    .populate("posicion1 posicion2 posicion3 posicion4")
    .limit(48)
    .sort({ _id: 1 })
    .lean();

  const octavos = await PartidoAp.find({ user: nomb, ronda: "octavos" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();

  const cuartos = await PartidoAp.find({ user: nomb, ronda: "cuartos" })
    .populate("local visitante user")
    .limit(48)
    .sort({ _id: 1 })
    .lean();
  res.status(200).json({
    grupoa,
    grupob,
    grupoc,
    grupod,
    grupoe,
    grupof,
    grupog,
    grupoh,
    posgrupoa,
    posgrupob,
    posgrupoc,
    posgrupod,
    posgrupoe,
    posgrupof,
    posgrupog,
    posgrupoh,
    octavos,
    cuartos,
  });
  await db.disconnect();
};
