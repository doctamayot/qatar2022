import bcrypt from "bcryptjs";
import { Types, ObjectId } from "mongoose";

interface Partido {
  name: string;
  local: string;
  visitante: string;
  golocal?: number;
  createdAt?: string;
  updatedAt?: string;
  golvisitante?: number;
  resultado?: string;
  fecha: string;
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
  users: SeedUser[];
  partidos: Partido[];
}

export const initialData: SeedData = {
  users: [
    {
      name: "Hugo Tamayo",
      email: "doctamayot@hotmail.com",
      password: bcrypt.hashSync("123456"),
      role: "admin",
      activo: true,
      partidos: [],
    },
    {
      name: "Eduardo Rios",
      email: "eduardo@google.com",
      password: bcrypt.hashSync("123456"),
      role: "client",
      activo: true,
    },
  ],
  partidos: [
    {
      name: "1",
      local: "Qatar",
      visitante: "Ecuador",
      fecha: "Nov 20 11:00 am",
    },
    {
      name: "2",
      local: "Inglaterra",
      visitante: "Iran",
      fecha: "Nov 21 08:00 am",
    },
  ],
};
