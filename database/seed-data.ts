import bcrypt from "bcryptjs";
import { Types, ObjectId } from "mongoose";

interface Equipo {
  name: string;
  bandera: string;
 grupo:string;
  
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "client";
  activo: boolean;
  partidos?: Types.ObjectId[];
}

interface SeedData {
  users?: SeedUser[];
  equipos?: Equipo[];
  partidos:any[]
}

export const initialData: SeedData = {
  // users: [
  //   {
  //     name: "Hugo Tamayo",
  //     email: "doctamayot@hotmail.com",
  //     password: bcrypt.hashSync("123456"),
  //     role: "admin",
  //     activo: true,
  //     partidos: [],
  //   },
  //   {
  //     name: "Eduardo Rios",
  //     email: "eduardo@google.com",
  //     password: bcrypt.hashSync("123456"),
  //     role: "client",
  //     activo: true,
  //   },
  // ],

  partidos: [
    {
      nombre:"1",
      local:"633ef8a306712422aaf6ffa4",//qatar
      visitante:"633ef8a306712422aaf6ffa5",//ecuador
      fecha:"Nov 20 11:00 am"

    },
    {
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    },
    {
      nombre:"3",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }{
      nombre:"2",
      local:"633ef8a306712422aaf6ffa8",//inglaterra
      visitante:"633ef8a306712422aaf6ffa9",//iran
      fecha:"Nov 21 .8:00 am"

    }
  ],
  equipos: [
    {
      name: "Qatar",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/xkeknodzjo60l8cqhh04.webp",
      grupo:"A"
    },
    {
      name: "Ecuador",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ep449yvzkuvmpl0g9hsn.jpg",
      grupo:"A"
    },{
      name: "Senegal",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/ayxkedeqkfj0albq61vf.jpg",
      grupo:"A"
    },{
      name: "Paises Bajos",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065609/qatar/znaikdr1hon2fiotuh1e.png",
      grupo:"A"
    },
    {
      name: "Inglaterra",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065847/qatar/l6iaupibucwi2axrlatq.webp",
      grupo:"B"
    },
    {
      name: "Iran",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/qogn8urxxh0y8llodv9s.jpg",
      grupo:"B"
    },{
      name: "USA",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065917/qatar/ctuu9dlfvbza0hqoxism.webp",
      grupo:"B"
    },{
      name: "Wales",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665065846/qatar/y9kr6c5ebqhob4qedkrn.jpg",
      grupo:"B"
    },
    {
      name: "Argentina",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/lyuxf7hie3vd5fdu1rsz.webp",
      grupo:"C"
    },
    {
      name: "Arabia Saudita",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066225/qatar/a1ghajll4ivdbhy7rfnb.jpg",
      grupo:"C"
    },{
      name: "Mexico",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/uasmn6h2euucu1zrs1rt.jpg",
      grupo:"C"
    },{
      name: "Polonia",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066224/qatar/n3rhppgcnoif5bwhd14t.jpg",
      grupo:"C"
    },
    {
      name: "Francia",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/atzl2xtuamrbcl8gksz8.webp",
      grupo:"D"
    },
    {
      name: "Australia",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/pmsck0x7vfhhfuyot846.webp",
      grupo:"D"
    },{
      name: "Dinamarca",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/n7orw7rqyrsqqjfhmmvm.webp",
      grupo:"D"
    },{
      name: "Tunez",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066543/qatar/hnataxit8bhmipozvwoj.jpg",
      grupo:"D"
    },
    {
      name: "España",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/lnkkj7hnekt4rnmlcdv0.webp",
      grupo:"E"
    },
    {
      name: "Costa Rica",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/ajlo7rsmlnnetzdi0hwe.webp",
      grupo:"E"
    },{
      name: "Alemania",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066744/qatar/dlng87kxte5lvtmhe2io.webp",
      grupo:"E"
    },{
      name: "Japon",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066743/qatar/lwk8w8cxdjgnqfcwdscr.jpg",
      grupo:"E"
    },
    {
      name: "Belgica",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066992/qatar/dyvprbnu1beyjhxx7odx.jpg",
      grupo:"F"
    },
    {
      name: "Canada",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066993/qatar/u0tahusoaavibh3stndj.jpg",
      grupo:"F"
    },{
      name: "Marruecos",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/f7gstfaohmaeh7k3mav1.webp",
      grupo:"F"
    },{
      name: "Croacia",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665066972/qatar/zjrxzcmme7udhgvuulrb.jpg",
      grupo:"F"
    },
    {
      name: "Brasil",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/mrtgsgyrhzssy6ujh8wl.jpg",
      grupo:"G"
    },
    {
      name: "Serbia",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067246/qatar/xymayifgltpvuwwredsp.jpg",
      grupo:"G"
    },{
      name: "Suiza",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/uxljgynjtvyphueiczug.jpg",
      grupo:"G"
    },{
      name: "Camerun",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067245/qatar/hu1epngg0lmp51x4xhkw.jpg",
      grupo:"G"
    },
    {
      name: "Portugal",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/fm3k5kl1ogdihhagz7v9.jpg",
      grupo:"H"
    },
    {
      name: "Ghana",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/crz028ius5epv1zyctgk.jpg",
      grupo:"H"
    },{
      name: "Uruguay",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/jagaphnmvqbzawxakbkk.webp",
      grupo:"H"
    },{
      name: "Corea del Sur",
      bandera: "https://res.cloudinary.com/hugotamayo/image/upload/v1665067441/qatar/qcwufgwt7dzn5felcpqv.webp",
      grupo:"H"
    },
    

    
  ],
};
