import { HeadquarterProgramTeacherI } from "./headquarter";


export interface Research_bondingI {
    id?: number;
    name: string;
    createdAt?:string
    HeadquarterProgramTeachers?:HeadquarterProgramTeacherI[]
    Teachers?:undefined | any[]

}
