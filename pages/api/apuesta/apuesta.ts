import type { NextApiRequest, NextApiResponse } from "next";
import { isValidObjectId } from "mongoose";



import { db } from "../../../database";
import { IEquipo } from "../../../interfaces";
import { User, EquipoAp, PartidoAp } from "../../../models";

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

  const users = await User.find()
    .sort({ createdAt: "asc" })
    
    

  await db.disconnect();

  

  res.status(200).json(users);
};

const createForm = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { _id = "" } = req.body;
 
  
  const equipos= [
    {user:_id,
      apiteamid: 1569,
      name: "Qatar",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/xkeknodzjo60l8cqhh04.webp",
      grupo: "A",
      puntos: 0,
    },
    {
      user:_id,
      apiteamid: 2382,
      name: "Ecuador",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ep449yvzkuvmpl0g9hsn.jpg",
      grupo: "A",
      puntos: 0,
    },
    {user:_id,
      apiteamid: 13,
      name: "Senegal",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ayxkedeqkfj0albq61vf.jpg",
      grupo: "A",
    },
    {user:_id,
      apiteamid: 1118,
      name: "Paises Bajos",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/znaikdr1hon2fiotuh1e.png",
      grupo: "A",
    },
    {user:_id,
      apiteamid: 10,
      name: "Inglaterra",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065847/qatar/l6iaupibucwi2axrlatq.webp",
      grupo: "B",
    },
    {user:_id,
      apiteamid: 22,
      name: "Iran",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/qogn8urxxh0y8llodv9s.jpg",
      grupo: "B",
    },
    {user:_id,
      apiteamid: 2384,
      name: "USA",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065917/qatar/ctuu9dlfvbza0hqoxism.webp",
      grupo: "B",
    },
    {user:_id,
      apiteamid: 767,
      name: "Wales",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/y9kr6c5ebqhob4qedkrn.jpg",
      grupo: "B",
    },
    {user:_id,
      apiteamid: 26,
      name: "Argentina",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/lyuxf7hie3vd5fdu1rsz.webp",
      grupo: "C",
    },
    {user:_id,
      apiteamid: 23,
      name: "Arabia Saudita",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/a1ghajll4ivdbhy7rfnb.jpg",
      grupo: "C",
    },
    {user:_id,
      apiteamid: 16,
      name: "Mexico",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/uasmn6h2euucu1zrs1rt.jpg",
      grupo: "C",
    },
    {user:_id,
      apiteamid: 24,
      name: "Polonia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/n3rhppgcnoif5bwhd14t.jpg",
      grupo: "C",
    },
    {user:_id,
      apiteamid: 2,
      name: "Francia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/atzl2xtuamrbcl8gksz8.webp",
      grupo: "D",
    },
    {user:_id,
      apiteamid: 20,
      name: "Australia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/pmsck0x7vfhhfuyot846.webp",
      grupo: "D",
    },
    {user:_id,
      apiteamid: 21,
      name: "Dinamarca",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/n7orw7rqyrsqqjfhmmvm.webp",
      grupo: "D",
    },
    {user:_id,
      apiteamid: 28,
      name: "Tunez",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/hnataxit8bhmipozvwoj.jpg",
      grupo: "D",
    },
    {user:_id,
      apiteamid: 9,
      name: "España",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/lnkkj7hnekt4rnmlcdv0.webp",
      grupo: "E",
    },
    {user:_id,
      apiteamid: 29,
      name: "Costa Rica",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/ajlo7rsmlnnetzdi0hwe.webp",
      grupo: "E",
    },
    {user:_id,
      apiteamid: 25,
      name: "Alemania",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/dlng87kxte5lvtmhe2io.webp",
      grupo: "E",
    },
    {user:_id,
      apiteamid: 12,
      name: "Japon",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/lwk8w8cxdjgnqfcwdscr.jpg",
      grupo: "E",
    },
    {user:_id,
      apiteamid: 1,
      name: "Belgica",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066992/qatar/dyvprbnu1beyjhxx7odx.jpg",
      grupo: "F",
    },
    {user:_id,
      apiteamid: 5529,
      name: "Canada",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066993/qatar/u0tahusoaavibh3stndj.jpg",
      grupo: "F",
    },
    {user:_id,
      apiteamid: 31,
      name: "Marruecos",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/f7gstfaohmaeh7k3mav1.webp",
      grupo: "F",
    },
    {user:_id,
      apiteamid: 3,
      name: "Croacia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/zjrxzcmme7udhgvuulrb.jpg",
      grupo: "F",
    },
    {user:_id,
      apiteamid: 6,
      name: "Brasil",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/mrtgsgyrhzssy6ujh8wl.jpg",
      grupo: "G",
    },
    {user:_id,
      apiteamid: 14,
      name: "Serbia",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/xymayifgltpvuwwredsp.jpg",
      grupo: "G",
    },
    {user:_id,
      apiteamid: 15,
      name: "Suiza",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/uxljgynjtvyphueiczug.jpg",
      grupo: "G",
    },
    {user:_id,
      apiteamid: 1530,
      name: "Camerun",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/hu1epngg0lmp51x4xhkw.jpg",
      grupo: "G",
    },
    {user:_id,
      apiteamid: 27,
      name: "Portugal",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/fm3k5kl1ogdihhagz7v9.jpg",
      grupo: "H",
    },
    {user:_id,
      apiteamid: 1504,
      name: "Ghana",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/crz028ius5epv1zyctgk.jpg",
      grupo: "H",
    },
    {user:_id,
      apiteamid: 7,
      name: "Uruguay",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/jagaphnmvqbzawxakbkk.webp",
      grupo: "H",
     },
     {user:_id,
      apiteamid: 17,
      name: "Corea del Sur",
      bandera:
        "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/qcwufgwt7dzn5felcpqv.webp",
      grupo: "H",
     },
  ]

  

  //const equiposQatar:any=await EquipoAp.findOne({user:_id}).select({name:"Qatar"})
  const equiposQatar:any=await EquipoAp.find({user:_id, name:"Qatar"})
  const Qatar=equiposQatar[0]._id
  const equiposEcuador:any=await EquipoAp.find({user:_id, name:"Ecuador"})
  const Ecuador=equiposEcuador[0]._id
  const equiposInglaterra:any=await EquipoAp.find({user:_id, name:"Inglaterra"})
  const Inglaterra=equiposInglaterra[0]._id
  const equiposIran:any=await EquipoAp.find({user:_id, name:"Iran"})
  const Iran=equiposIran[0]._id
  const equiposSenegal:any=await EquipoAp.find({user:_id, name:"Senegal"})
  const Senegal=equiposSenegal[0]._id
  const equiposPaisesBajos:any=await EquipoAp.find({user:_id, name:"Paises Bajos"})
  const PaisesBajos=equiposPaisesBajos[0]._id
  const equiposArgentina:any=await EquipoAp.find({user:_id, name:"Argentina"})
  const Argentina=equiposArgentina[0]._id
  const equiposArabia:any=await EquipoAp.find({user:_id, name:"Arabia Saudita"})
  const Arabia=equiposArabia[0]._id
  const equiposDinamarca:any=await EquipoAp.find({user:_id, name:"Dinamarca"})
  const Dinamarca=equiposDinamarca[0]._id
  const equiposTunez:any=await EquipoAp.find({user:_id, name:"Tunez"})
  const Tunez=equiposTunez[0]._id
  const equiposMexico:any=await EquipoAp.find({user:_id, name:"Mexico"})
  const Mexico=equiposMexico[0]._id
  const equiposPolonia:any=await EquipoAp.find({user:_id, name:"Polonia"})
  const Polonia=equiposPolonia[0]._id
  const equiposMarruecos:any=await EquipoAp.find({user:_id, name:"Marruecos"})
  const Marruecos=equiposMarruecos[0]._id
  const equiposCroacia:any=await EquipoAp.find({user:_id, name:"Croacia"})
  const Croacia=equiposCroacia[0]._id

  
  
  
  const partidos=[
  {
        idapi: 855736,
        nombre: "1",
        local: Qatar, //qatar
        visitante: Ecuador, //ecuador
      },
      {
        idapi: 855735,
        nombre: "2",
        local: Inglaterra, //inglaterra
        visitante: Iran, //iran
      },
      {
        idapi: 855734,
        nombre: "3",
        local: Senegal, //Senegal
        visitante: PaisesBajos, //paises
      },

      {
        idapi: 855737,
        nombre: "5",
        local: Argentina, //Argentina
        visitante: Arabia, //arabia
      },
      {
        idapi: 855738,
        nombre: "6",
        local: Dinamarca, //dinamarca
        visitante: Tunez, //tunez
      },
      {
        idapi: 855739,
        nombre: "7",
        local: Mexico, //mexico
        visitante:Polonia , //polonia
      },
      {
        idapi: 855740,
        nombre: "9",
        local: Marruecos, //mar
        visitante: Croacia, //cro
      },
      // {
      //   idapi: 855741,
      //   nombre: "10",
      //   local: "634085b00b436c115a56d2b3", //ale
      //   visitante: "634085b00b436c115a56d2b4", //jap
      // },
      // {
      //   idapi: 855742,
      //   nombre: "12",
      //   local: "634085b00b436c115a56d2b5", //bel
      //   visitante: "634085b00b436c115a56d2b6", //can
      // },
      // {
      //   idapi: 855743,
      //   nombre: "13",
      //   local: "634085b00b436c115a56d2bb", //sui
      //   visitante: "634085b00b436c115a56d2bc", //cam
      // },
      // {
      //   idapi: 855744,
      //   nombre: "14",
      //   local: "634085b00b436c115a56d2bf", //uru
      //   visitante: "634085b00b436c115a56d2c0", //cor
      // },
      // {
      //   idapi: 855745,
      //   nombre: "15",
      //   local: "634085b00b436c115a56d2bd", //por
      //   visitante: "634085b00b436c115a56d2be", //gha
      // },
      // {
      //   idapi: 855746,
      //   nombre: "16",
      //   local: "634085b00b436c115a56d2b9", //bra
      //   visitante: "634085b00b436c115a56d2ba", //ser
      // },
      // {
      //   idapi: 855747,
      //   nombre: "18",
      //   local: "634085b00b436c115a56d2a1", //qat
      //   visitante: "634085b00b436c115a56d2a3", //sen
      // },
      // {
      //   idapi: 855748,
      //   nombre: "19",
      //   local: "634085b00b436c115a56d2a4", //hol
      //   visitante: "634085b00b436c115a56d2a2", //ecu
      // },
      // {
      //   idapi: 855749,
      //   nombre: "20",
      //   local: "634085b00b436c115a56d2a5", //ing
      //   visitante: "634085b00b436c115a56d2a7", //usa
      // },
      // {
      //   idapi: 855750,
      //   nombre: "22",
      //   local: "634085b00b436c115a56d2b0", //pol
      //   visitante: "634085b00b436c115a56d2aa", //ara
      // },
      // {
      //   idapi: 855751,
      //   nombre: "23",
      //   local: "634085b00b436c115a56d2ad", //fra
      //   visitante: "634085b00b436c115a56d2af", //din
      // },
      // {
      //   idapi: 855752,
      //   nombre: "24",
      //   local: "634085b00b436c115a56d2a9", //arg
      //   visitante: "634085b00b436c115a56d2ab", //mex
      // },
      // {
      //   idapi: 855753,
      //   nombre: "26",
      //   local: "634085b00b436c115a56d2b5", //bel
      //   visitante: "634085b00b436c115a56d2b7", //mar
      // },
      // {
      //   idapi: 855754,
      //   nombre: "27",
      //   local: "634085b00b436c115a56d2b8", //cro
      //   visitante: "634085b00b436c115a56d2b6", //can
      // },
      // {
      //   idapi: 855755,
      //   nombre: "28",
      //   local: "634085b00b436c115a56d2b1", //esp
      //   visitante: "634085b00b436c115a56d2b3", //ale
      // },
      // {
      //   idapi: 855756,
      //   nombre: "29",
      //   local: "634085b00b436c115a56d2bc", //cam
      //   visitante: "634085b00b436c115a56d2ba", //serb
      // },
      // {
      //   idapi: 855757,
      //   nombre: "30",
      //   local: "634085b00b436c115a56d2c0", //cor
      //   visitante: "634085b00b436c115a56d2be", //gha
      // },
      // {
      //   idapi: 855758,
      //   nombre: "31",
      //   local: "634085b00b436c115a56d2b9", //bra
      //   visitante: "634085b00b436c115a56d2bb", //sui
      // },
      // {
      //   idapi: 855759,
      //   nombre: "32",
      //   local: "634085b00b436c115a56d2bd", //por
      //   visitante: "634085b00b436c115a56d2bf", //uru
      // },
      // {
      //   idapi: 855760,
      //   nombre: "34",
      //   local: "634085b00b436c115a56d2a4", //hol
      //   visitante: "634085b00b436c115a56d2a1", //qat
      // },
      // {
      //   idapi: 855761,
      //   nombre: "33",
      //   local: "634085b00b436c115a56d2a2", //ecu
      //   visitante: "634085b00b436c115a56d2a3", //sen
      // },
      // {
      //   idapi: 855762,
      //   nombre: "35",
      //   local: "634085b00b436c115a56d2a6", //ira
      //   visitante: "634085b00b436c115a56d2a7", //usa
      // },
      // {
      //   idapi: 855763,
      //   nombre: "37",
      //   local: "634085b00b436c115a56d2b0", //tun
      //   visitante: "634085b00b436c115a56d2ad", //fra
      // },
      // {
      //   idapi: 855764,
      //   nombre: "39",
      //   local: "634085b00b436c115a56d2b0", //pol
      //   visitante: "634085b00b436c115a56d2a9", //arg
      // },
      // {
      //   idapi: 855765,
      //   nombre: "40",
      //   local: "634085b00b436c115a56d2aa", //ara
      //   visitante: "634085b00b436c115a56d2af", //mex
      // },
      // {
      //   idapi: 855766,
      //   nombre: "41",
      //   local: "634085b00b436c115a56d2b8", //cro
      //   visitante: "634085b00b436c115a56d2b5", //bel
      // },
      // {
      //   idapi: 855767,
      //   nombre: "42",
      //   local: "634085b00b436c115a56d2b6", //can
      //   visitante: "634085b00b436c115a56d2b7", //mar
      // },
      // {
      //   idapi: 855768,
      //   nombre: "43",
      //   local: "634085b00b436c115a56d2b4", //jap
      //   visitante: "634085b00b436c115a56d2b1", //esp
      // },
      // {
      //   idapi: 855769,
      //   nombre: "45",
      //   local: "634085b00b436c115a56d2c0", //cor
      //   visitante: "634085b00b436c115a56d2bd", //por
      // },
      // {
      //   idapi: 855770,
      //   nombre: "46",
      //   local: "634085b00b436c115a56d2be", //gha
      //   visitante: "634085b00b436c115a56d2bf", //uru
      // },
      // {
      //   idapi: 855771,
      //   nombre: "48",
      //   local: "634085b00b436c115a56d2bc", //cam
      //   visitante: "634085b00b436c115a56d2b9", //bra
      // },
      // {
      //   idapi: 855772,
      //   nombre: "47",
      //   local: "634085b00b436c115a56d2ba", //ser
      //   visitante: "634085b00b436c115a56d2bb", //sui
      // },
      // {
      //   idapi: 866681,
      //   nombre: "4",
      //   local: "634085b00b436c115a56d2a7", //usa
      //   visitante: "634085b00b436c115a56d2a8", //wal
      // },
      // {
      //   idapi: 866682,
      //   nombre: "17",
      //   local: "634085b00b436c115a56d2a8", //wal
      //   visitante: "634085b00b436c115a56d2a6", //ira
      // },
      // {
      //   idapi: 866683,
      //   nombre: "36",
      //   local: "634085b00b436c115a56d2a8", //wal
      //   visitante: "634085b00b436c115a56d2a5", //ing
      // },
      // {
      //   idapi: 871850,
      //   nombre: "8",
      //   local: "634085b00b436c115a56d2ad", //fra
      //   visitante: "634085b00b436c115a56d2ae", //aus
      // },
      // {
      //   idapi: 871851,
      //   nombre: "11",
      //   local: "634085b00b436c115a56d2b1", //esp
      //   visitante: "634085b00b436c115a56d2b2", //cos
      // },
      // {
      //   idapi: 871852,
      //   nombre: "21",
      //   local: "634085b00b436c115a56d2b0", //tun
      //   visitante: "634085b00b436c115a56d2ae", //aus
      // },
      // {
      //   idapi: 871853,
      //   nombre: "25",
      //   local: "634085b00b436c115a56d2b4", //jap
      //   visitante: "634085b00b436c115a56d2b2", //cos
      // },
      // {
      //   idapi: 871854,
      //   nombre: "38",
      //   local: "634085b00b436c115a56d2ae", //aus
      //   visitante: "634085b00b436c115a56d2af", //din
      // },
      // {
      //   idapi: 871855,
      //   nombre: "44",
      //   local: "634085b00b436c115a56d2b2", //cos
      //   visitante: "634085b00b436c115a56d2b3", //ale
      // },

  ]

  try {
    //await EquipoAp.insertMany(equipos);
   await PartidoAp.insertMany(partidos);
    
  } catch (error) {
    
  }

  await db.disconnect();

  

  res.status(200).json(partidos);
};