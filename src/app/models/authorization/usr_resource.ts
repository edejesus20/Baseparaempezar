import { RoleI } from "./usr_roles";

export interface ResourceI {
    id?:number;
    path: string;
    method: string ;
    id_padre: string | number;
    icono: string;
    link: string;
    titulo: string;
    Roles?:RoleI[]
  }