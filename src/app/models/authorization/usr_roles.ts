import { UserI } from "./usr_User";

export interface RoleI {
    id:number;
    name: string;
    Users?:UserI[];
    rolesUsers?:any[]

}