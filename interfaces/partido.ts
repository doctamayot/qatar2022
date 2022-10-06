export interface IPartido {
  _id: string;
  nombre: string;
  local: string;
  visitante: string;
  golocal: number;
  createdAt?: string;
  updatedAt?: string;
  golvisitante: number;
  resultado: string;
  fecha: string;
}
