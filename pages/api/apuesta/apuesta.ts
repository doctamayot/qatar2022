import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";

import { db } from "../../../database";
import { IEquipo } from "../../../interfaces";
import {
  User,
  EquipoAp,
  PartidoAp,
  GrupoAp,
  OctavoAp,
  CuartoAp,
  SemiAp,
  FinalAp,
  DatosFinal,
} from "../../../models";

type Data = { message: string } | any[] | any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getUsers(req, res);

    case "POST":
      return createForm(req, res);
    // case "DELETE":
    //   return deleteProduct(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const users = await User.find().sort({ createdAt: "asc" });

  await db.disconnect();

  res.status(200).json(users);
};

const createForm = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { _id = "" } = req.body;

  const user = await User.findByIdAndUpdate(_id, {
    formulario: true,
  });

  //console.log(req.body);

  const equipos = [
    {
      user: _id,
      apiteamid: 1569,
      name: "Qatar",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/xkeknodzjo60l8cqhh04.webp",
      grupo: "A",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 2382,
      name: "Ecuador",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ep449yvzkuvmpl0g9hsn.jpg",
      grupo: "A",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 13,
      name: "Senegal",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ayxkedeqkfj0albq61vf.jpg",
      grupo: "A",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 1118,
      name: "Paises Bajos",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/znaikdr1hon2fiotuh1e.png",
      grupo: "A",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 10,
      name: "Inglaterra",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065847/qatar/l6iaupibucwi2axrlatq.webp",
      grupo: "B",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 22,
      name: "Iran",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/qogn8urxxh0y8llodv9s.jpg",
      grupo: "B",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 2384,
      name: "USA",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065917/qatar/ctuu9dlfvbza0hqoxism.webp",
      grupo: "B",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 767,
      name: "Wales",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/y9kr6c5ebqhob4qedkrn.jpg",
      grupo: "B",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 26,
      name: "Argentina",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/lyuxf7hie3vd5fdu1rsz.webp",
      grupo: "C",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 23,
      name: "Arabia Saudita",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/a1ghajll4ivdbhy7rfnb.jpg",
      grupo: "C",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 16,
      name: "Mexico",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/uasmn6h2euucu1zrs1rt.jpg",
      grupo: "C",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 24,
      name: "Polonia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/n3rhppgcnoif5bwhd14t.jpg",
      grupo: "C",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 2,
      name: "Francia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/atzl2xtuamrbcl8gksz8.webp",
      grupo: "D",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 20,
      name: "Australia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/pmsck0x7vfhhfuyot846.webp",
      grupo: "D",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 21,
      name: "Dinamarca",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/n7orw7rqyrsqqjfhmmvm.webp",
      grupo: "D",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 28,
      name: "Tunez",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/hnataxit8bhmipozvwoj.jpg",
      grupo: "D",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 9,
      name: "España",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/lnkkj7hnekt4rnmlcdv0.webp",
      grupo: "E",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 29,
      name: "Costa Rica",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/ajlo7rsmlnnetzdi0hwe.webp",
      grupo: "E",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 25,
      name: "Alemania",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/dlng87kxte5lvtmhe2io.webp",
      grupo: "E",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 12,
      name: "Japon",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/lwk8w8cxdjgnqfcwdscr.jpg",
      grupo: "E",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 1,
      name: "Belgica",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066992/qatar/dyvprbnu1beyjhxx7odx.jpg",
      grupo: "F",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 5529,
      name: "Canada",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066993/qatar/u0tahusoaavibh3stndj.jpg",
      grupo: "F",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 31,
      name: "Marruecos",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/f7gstfaohmaeh7k3mav1.webp",
      grupo: "F",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 3,
      name: "Croacia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/zjrxzcmme7udhgvuulrb.jpg",
      grupo: "F",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 6,
      name: "Brasil",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/mrtgsgyrhzssy6ujh8wl.jpg",
      grupo: "G",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 14,
      name: "Serbia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/xymayifgltpvuwwredsp.jpg",
      grupo: "G",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 15,
      name: "Suiza",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/uxljgynjtvyphueiczug.jpg",
      grupo: "G",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 1530,
      name: "Camerun",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/hu1epngg0lmp51x4xhkw.jpg",
      grupo: "G",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 27,
      name: "Portugal",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/fm3k5kl1ogdihhagz7v9.jpg",
      grupo: "H",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 1504,
      name: "Ghana",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/crz028ius5epv1zyctgk.jpg",
      grupo: "H",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 7,
      name: "Uruguay",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/jagaphnmvqbzawxakbkk.webp",
      grupo: "H",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
    {
      user: _id,
      apiteamid: 17,
      name: "Corea del Sur",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/qcwufgwt7dzn5felcpqv.webp",
      grupo: "H",
      puntos: 0,
      difgoles: 0,
      golescontra: 0,
      golesfavor: 0,
    },
  ];

  try {
    await EquipoAp.insertMany(equipos);
  } catch (error) {
    console.log(error);
  }

  const equiposQatar: any = await EquipoAp.find({ user: _id, name: "Qatar" });

  const Qatar = equiposQatar[0]._id;
  const equiposEcuador: any = await EquipoAp.find({
    user: _id,
    name: "Ecuador",
  });
  const Ecuador = equiposEcuador[0]._id;
  const equiposInglaterra: any = await EquipoAp.find({
    user: _id,
    name: "Inglaterra",
  });
  const Inglaterra = equiposInglaterra[0]._id;
  const equiposIran: any = await EquipoAp.find({ user: _id, name: "Iran" });
  const Iran = equiposIran[0]._id;
  const equiposSenegal: any = await EquipoAp.find({
    user: _id,
    name: "Senegal",
  });
  const Senegal = equiposSenegal[0]._id;
  const equiposPaisesBajos: any = await EquipoAp.find({
    user: _id,
    name: "Paises Bajos",
  });
  const PaisesBajos = equiposPaisesBajos[0]._id;
  const equiposArgentina: any = await EquipoAp.find({
    user: _id,
    name: "Argentina",
  });
  const Argentina = equiposArgentina[0]._id;
  const equiposArabia: any = await EquipoAp.find({
    user: _id,
    name: "Arabia Saudita",
  });
  const Arabia = equiposArabia[0]._id;
  const equiposDinamarca: any = await EquipoAp.find({
    user: _id,
    name: "Dinamarca",
  });
  const Dinamarca = equiposDinamarca[0]._id;
  const equiposTunez: any = await EquipoAp.find({ user: _id, name: "Tunez" });
  const Tunez = equiposTunez[0]._id;
  const equiposMexico: any = await EquipoAp.find({ user: _id, name: "Mexico" });
  const Mexico = equiposMexico[0]._id;
  const equiposPolonia: any = await EquipoAp.find({
    user: _id,
    name: "Polonia",
  });
  const Polonia = equiposPolonia[0]._id;
  const equiposMarruecos: any = await EquipoAp.find({
    user: _id,
    name: "Marruecos",
  });
  const Marruecos = equiposMarruecos[0]._id;
  const equiposCroacia: any = await EquipoAp.find({
    user: _id,
    name: "Croacia",
  });
  const Croacia = equiposCroacia[0]._id;
  const equiposAlemania: any = await EquipoAp.find({
    user: _id,
    name: "Alemania",
  });
  const Alemania = equiposAlemania[0]._id;
  const equiposJapon: any = await EquipoAp.find({ user: _id, name: "Japon" });
  const Japon = equiposJapon[0]._id;
  const equiposBelgica: any = await EquipoAp.find({
    user: _id,
    name: "Belgica",
  });
  const Belgica = equiposBelgica[0]._id;
  const equiposCanada: any = await EquipoAp.find({ user: _id, name: "Canada" });
  const Canada = equiposCanada[0]._id;
  const equiposCamerun: any = await EquipoAp.find({
    user: _id,
    name: "Camerun",
  });
  const Camerun = equiposCamerun[0]._id;
  const equiposSuiza: any = await EquipoAp.find({ user: _id, name: "Suiza" });
  const Suiza = equiposSuiza[0]._id;
  const equiposUruguay: any = await EquipoAp.find({
    user: _id,
    name: "Uruguay",
  });
  const Uruguay = equiposUruguay[0]._id;
  const equiposCorea: any = await EquipoAp.find({
    user: _id,
    name: "Corea del Sur",
  });
  const Corea = equiposCorea[0]._id;
  const equiposPortugal: any = await EquipoAp.find({
    user: _id,
    name: "Portugal",
  });
  const Portugal = equiposPortugal[0]._id;
  const equiposGhana: any = await EquipoAp.find({ user: _id, name: "Ghana" });
  const Ghana = equiposGhana[0]._id;
  const equiposBrasil: any = await EquipoAp.find({ user: _id, name: "Brasil" });
  const Brasil = equiposBrasil[0]._id;
  const equiposSerbia: any = await EquipoAp.find({ user: _id, name: "Serbia" });
  const Serbia = equiposSerbia[0]._id;
  const equiposUSA: any = await EquipoAp.find({ user: _id, name: "USA" });
  const USA = equiposUSA[0]._id;
  const equiposFrancia: any = await EquipoAp.find({
    user: _id,
    name: "Francia",
  });
  const Francia = equiposFrancia[0]._id;
  const equiposEspaña: any = await EquipoAp.find({ user: _id, name: "España" });
  const España = equiposEspaña[0]._id;
  const equiposWales: any = await EquipoAp.find({ user: _id, name: "Wales" });
  const Wales = equiposWales[0]._id;
  const equiposCostaRica: any = await EquipoAp.find({
    user: _id,
    name: "Costa Rica",
  });
  const CostaRica = equiposCostaRica[0]._id;
  const equiposAustralia: any = await EquipoAp.find({
    user: _id,
    name: "Australia",
  });
  const Australia = equiposAustralia[0]._id;

  const partidos = [
    {
      user: _id,
      idapi: 855736,
      nombre: "1",
      local: Qatar, //qatar
      visitante: Ecuador, //ecuador
      grupo: "A",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855735,
      nombre: "2",
      local: Inglaterra, //inglaterra
      visitante: Iran, //iran
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855734,
      nombre: "3",
      local: Senegal, //Senegal
      visitante: PaisesBajos, //paises
      grupo: "A",
      ronda: "grupos",
    },

    {
      user: _id,
      idapi: 855737,
      nombre: "5",
      local: Argentina, //Argentina
      visitante: Arabia, //arabia
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855738,
      nombre: "6",
      local: Dinamarca, //dinamarca
      visitante: Tunez, //tunez
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855739,
      nombre: "7",
      local: Mexico, //mexico
      visitante: Polonia, //polonia
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855740,
      nombre: "9",
      local: Marruecos, //mar
      visitante: Croacia, //cro
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855741,
      nombre: "10",
      local: Alemania, //ale
      visitante: Japon, //jap
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855742,
      nombre: "12",
      local: Belgica, //bel
      visitante: Canada, //can
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855743,
      nombre: "13",
      local: Suiza, //sui
      visitante: Camerun, //cam
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855744,
      nombre: "14",
      local: Uruguay, //uru
      visitante: Corea, //cor
      grupo: "H",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855745,
      nombre: "15",
      local: Portugal, //por
      visitante: Ghana, //gha
      grupo: "H",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855746,
      nombre: "16",
      local: Brasil, //bra
      visitante: Serbia, //ser
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855747,
      nombre: "18",
      local: Qatar, //qat
      visitante: Senegal, //sen
      grupo: "A",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855748,
      nombre: "19",
      local: PaisesBajos, //hol
      visitante: Ecuador, //ecu
      grupo: "A",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855749,
      nombre: "20",
      local: Inglaterra, //ing
      visitante: USA, //usa
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855750,
      nombre: "22",
      local: Polonia, //pol
      visitante: Arabia, //ara
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855751,
      nombre: "23",
      local: Francia, //fra
      visitante: Dinamarca, //din
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855752,
      nombre: "24",
      local: Argentina, //arg
      visitante: Mexico, //mex
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855753,
      nombre: "26",
      local: Belgica, //bel
      visitante: Marruecos, //mar
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855754,
      nombre: "27",
      local: Croacia, //cro
      visitante: Canada, //can
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855755,
      nombre: "28",
      local: España, //esp
      visitante: Alemania, //ale
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855756,
      nombre: "29",
      local: Camerun, //cam
      visitante: Serbia, //serb
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855757,
      nombre: "30",
      local: Corea, //cor
      visitante: Ghana, //gha
      grupo: "H",
      ronda: "grupos",
    },

    {
      user: _id,
      idapi: 855758,
      nombre: "31",
      local: Brasil, //bra
      visitante: Suiza, //sui
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855759,
      nombre: "32",
      local: Portugal, //por
      visitante: Uruguay, //uru
      grupo: "H",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855760,
      nombre: "34",
      local: PaisesBajos, //hol
      visitante: Qatar, //qat
      grupo: "A",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855761,
      nombre: "33",
      local: Ecuador, //ecu
      visitante: Senegal, //sen
      grupo: "A",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855762,
      nombre: "35",
      local: Iran, //ira
      visitante: USA, //usa
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855763,
      nombre: "37",
      local: Tunez, //tun
      visitante: Francia, //fra
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855764,
      nombre: "39",
      local: Polonia, //pol
      visitante: Argentina, //arg
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855765,
      nombre: "40",
      local: Arabia, //ara
      visitante: Mexico, //mex
      grupo: "C",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855766,
      nombre: "41",
      local: Croacia, //cro
      visitante: Belgica, //bel
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855767,
      nombre: "42",
      local: Canada, //can
      visitante: Marruecos, //mar
      grupo: "F",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855768,
      nombre: "E",
      local: Japon, //jap
      visitante: España, //esp
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855769,
      nombre: "45",
      local: Corea, //cor
      visitante: Portugal, //por
      grupo: "H",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855770,
      nombre: "46",
      local: Ghana, //gha
      visitante: Uruguay, //uru
      grupo: "H",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855771,
      nombre: "48",
      local: Camerun, //cam
      visitante: Brasil, //bra
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 855772,
      nombre: "47",
      local: Serbia, //ser
      visitante: Suiza, //sui
      grupo: "G",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 866681,
      nombre: "4",
      local: USA, //usa
      visitante: Wales, //wal
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 866682,
      nombre: "17",
      local: Wales, //wal
      visitante: Iran, //ira
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 866683,
      nombre: "36",
      local: Wales, //wal
      visitante: Inglaterra, //ing
      grupo: "B",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871850,
      nombre: "8",
      local: Francia, //fra
      visitante: Australia, //aus
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871851,
      nombre: "11",
      local: España, //esp
      visitante: CostaRica, //cos
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871852,
      nombre: "21",
      local: Tunez, //tun
      visitante: Australia, //aus
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871853,
      nombre: "25",
      local: Japon, //jap
      visitante: CostaRica, //cos
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871854,
      nombre: "38",
      local: Australia, //aus
      visitante: Dinamarca, //din
      grupo: "D",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "44",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      grupo: "E",
      ronda: "grupos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "49",
      local: Qatar, //cos
      visitante: Senegal, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "50",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "51",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "52",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "53",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "54",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "55",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "56",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "octavos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "57",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "cuartos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "58",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "cuartos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "59",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "cuartos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "60",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "cuartos",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "61",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "semis",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "62",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "semis",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "63",
      local: CostaRica, //cos
      visitante: Alemania, //ale
      ronda: "final",
    },
    {
      user: _id,
      idapi: 871855,
      nombre: "64",
      local: CostaRica, //cos
      visitante: Qatar, //ale
      ronda: "final",
    },
  ];

  const grupos = [
    {
      user: _id,
      name: "A",
      equipos: [Qatar, Ecuador, Senegal, PaisesBajos],
      posicion1: Qatar,
      posicion2: Ecuador,
      posicion3: Senegal,
      posicion4: PaisesBajos,
    },
    {
      user: _id,
      name: "B",
      equipos: [Inglaterra, Iran, USA, Wales],
      posicion1: Inglaterra,
      posicion2: Iran,
      posicion3: USA,
      posicion4: Wales,
    },

    {
      user: _id,
      name: "C",
      equipos: [Argentina, Arabia, Mexico, Polonia],
      posicion1: Argentina,
      posicion2: Arabia,
      posicion3: Mexico,
      posicion4: Polonia,
    },
    {
      user: _id,
      name: "D",
      equipos: [Francia, Australia, Dinamarca, Tunez],
      posicion1: Francia,
      posicion2: Australia,
      posicion3: Dinamarca,
      posicion4: Tunez,
    },
    {
      user: _id,
      name: "E",
      equipos: [España, CostaRica, Alemania, Japon],
      posicion1: España,
      posicion2: CostaRica,
      posicion3: Alemania,
      posicion4: Japon,
    },
    {
      user: _id,
      name: "F",
      equipos: [Belgica, Canada, Marruecos, Croacia],
      posicion1: Belgica,
      posicion2: Canada,
      posicion3: Marruecos,
      posicion4: Croacia,
    },
    {
      user: _id,
      name: "G",
      equipos: [Brasil, Serbia, Suiza, Camerun],
      posicion1: Brasil,
      posicion2: Serbia,
      posicion3: Suiza,
      posicion4: Camerun,
    },
    {
      user: _id,
      name: "H",
      equipos: [Portugal, Ghana, Uruguay, Corea],
      posicion1: Portugal,
      posicion2: Ghana,
      posicion3: Uruguay,
      posicion4: Corea,
    },
  ];

  try {
    await PartidoAp.insertMany(partidos);
    await GrupoAp.insertMany(grupos);
  } catch (error) {
    console.log(error);
  }

  const partidooct1: any = await PartidoAp.find({
    user: _id,
    nombre: "49",
  });
  const octavo1 = partidooct1[0]._id;

  const partidooct2: any = await PartidoAp.find({
    user: _id,
    nombre: "50",
  });
  const octavo2 = partidooct2[0]._id;
  const partidooct3: any = await PartidoAp.find({
    user: _id,
    nombre: "51",
  });
  const octavo3 = partidooct3[0]._id;
  const partidooct4: any = await PartidoAp.find({
    user: _id,
    nombre: "52",
  });
  const octavo4 = partidooct4[0]._id;
  const partidooct5: any = await PartidoAp.find({
    user: _id,
    nombre: "53",
  });
  const octavo5 = partidooct5[0]._id;
  const partidooct6: any = await PartidoAp.find({
    user: _id,
    nombre: "54",
  });
  const octavo6 = partidooct6[0]._id;
  const partidooct7: any = await PartidoAp.find({
    user: _id,
    nombre: "55",
  });
  const octavo7 = partidooct7[0]._id;
  const partidooct8: any = await PartidoAp.find({
    user: _id,
    nombre: "56",
  });
  const octavo8 = partidooct8[0]._id;

  const octavos = [
    {
      user: _id,
      name: "Octavos 1",
      ganador: Qatar,
      partido: octavo1,
    },
    {
      user: _id,
      name: "Octavos 2",
      ganador: Qatar,
      partido: octavo2,
    },
    {
      user: _id,
      name: "Octavos 3",
      ganador: Qatar,
      partido: octavo3,
    },
    {
      user: _id,
      name: "Octavos 4",
      ganador: Qatar,
      partido: octavo4,
    },
    {
      user: _id,
      name: "Octavos 5",
      ganador: Qatar,
      partido: octavo5,
    },
    {
      user: _id,
      name: "Octavos 6",
      ganador: Qatar,
      partido: octavo6,
    },
    {
      user: _id,
      name: "Octavos 7",
      ganador: Qatar,
      partido: octavo7,
    },
    {
      user: _id,
      name: "Octavos 8",
      ganador: Qatar,
      partido: octavo8,
    },
  ];

  try {
    await OctavoAp.insertMany(octavos);
  } catch (error) {
    console.log(error);
  }

  const partidocuarto1: any = await PartidoAp.find({
    user: _id,
    nombre: "57",
  });
  const cuarto1 = partidocuarto1[0]._id;

  const partidocuarto2: any = await PartidoAp.find({
    user: _id,
    nombre: "58",
  });
  const cuarto2 = partidocuarto2[0]._id;
  const partidocuarto3: any = await PartidoAp.find({
    user: _id,
    nombre: "59",
  });
  const cuarto3 = partidocuarto3[0]._id;
  const partidocuarto4: any = await PartidoAp.find({
    user: _id,
    nombre: "60",
  });
  const cuarto4 = partidocuarto4[0]._id;

  const cuartos = [
    {
      user: _id,
      name: "Cuartos 1",
      ganador: Qatar,
      partido: cuarto1,
    },
    {
      user: _id,
      name: "Cuartos 2",
      ganador: Qatar,
      partido: cuarto2,
    },
    {
      user: _id,
      name: "Cuartos 3",
      ganador: Qatar,
      partido: cuarto3,
    },
    {
      user: _id,
      name: "Cuartos 4",
      ganador: Qatar,
      partido: cuarto4,
    },
  ];

  try {
    await CuartoAp.insertMany(cuartos);
  } catch (error) {
    console.log(error);
  }

  const partidosemis1: any = await PartidoAp.find({
    user: _id,
    nombre: "61",
  });
  const semis1 = partidosemis1[0]._id;

  const partidosemis2: any = await PartidoAp.find({
    user: _id,
    nombre: "62",
  });
  const semis2 = partidosemis2[0]._id;

  const semis = [
    {
      user: _id,
      name: "Semis 1",
      ganador: Qatar,
      perdedor: Ecuador,
      partido: semis1,
    },
    {
      user: _id,
      name: "Semis 2",
      ganador: Qatar,
      perdedor: Ecuador,
      partido: semis2,
    },
  ];

  try {
    await SemiAp.insertMany(semis);
  } catch (error) {
    console.log(error);
  }

  const partidotercer: any = await PartidoAp.find({
    user: _id,
    nombre: "63",
  });
  const tercer = partidotercer[0]._id;

  const partidofinal: any = await PartidoAp.find({
    user: _id,
    nombre: "64",
  });
  const campeon = partidofinal[0]._id;

  const final = [
    {
      user: _id,
      name: "Tercer Puesto",
      ganador: Qatar,
      perdedor: Ecuador,
      partido: tercer,
      campeon: Qatar,
      sub: Qatar,
      tercero: Qatar,
      cuarto: Qatar,
    },
    {
      user: _id,
      name: "Final",
      ganador: Qatar,
      perdedor: Ecuador,
      partido: campeon,
      campeon: Qatar,
      sub: Qatar,
      tercero: Qatar,
      cuarto: Qatar,
    },
  ];

  try {
    await FinalAp.insertMany(final);
  } catch (error) {
    console.log(error);
  }

  const posiciones = [
    {
      name: "datos",
      user: _id,
      campeon: Qatar,
      sub: Qatar,
      tercero: Qatar,
      cuarto: Qatar,
    },
  ];

  try {
    await DatosFinal.insertMany(posiciones);
  } catch (error) {
    console.log(error);
  }

  await db.disconnect();

  res.status(200).json({ user, partidos, grupos, equipos, final, posiciones });
};
