import { PersonI } from "../user/person";
import { RoleI } from "./usr_roles";

export interface UserI {
  id?:number;
  username: string;
  email: string;
  fullName: string;
  password?: string;
  Roles?:[
    {
      name:string
    }
  ]
  Person?:PersonI
  avatar?:string
  People?:PersonI[]
  UserRoles?:UserRoleI[]
  todo?:string
}
export interface UserRoleI {
  UserId:number,
  RoleId:number,
  Role?:RoleI
}


export interface UserLoginI {
  username: string;
  password: string;
}


export interface UserLoginResponseI {
  user:  UsernameI;
  token: string;
  menu?:any
}

export interface MenuResponseI {
  id:       number;
  id_padre: number;
  icono:    string;
  link:     string;
  titulo:   string;
}

export interface UsernameI {
  username: string;
  fullName?: string;
  id: number;
}