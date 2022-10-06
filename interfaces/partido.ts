export interface IPartido {
  _id: string;
  name: string;
  local: string;
  visitante: string;
  golocal: number;
  createdAt?: string;
  updatedAt?: string;
  golvisitante: number;
  resultado: string;
  fecha: string;
}
