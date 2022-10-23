export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  activo: boolean;
  createdAt?: string;
  updatedAt?: string;
  partidos: string[];
  cuartos: string[];
  octavos: string[];
  semis: string[];
  final: string[];
  puntos: number;
  extras: number;
  posicion: number;
}
