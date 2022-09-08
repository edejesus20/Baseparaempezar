// import { LineI } from "../projet/line";
// import { TeacherI } from "../user/teacher";
import { CategoryI } from "./category";
import { FacultyI } from "./faculty";
import { HeadquarterI, HeadquarterProgramI } from "./headquarter";

export interface ProgramI {
   id?: number;
   name: string;
   FacultyId?:number;
   CategoryId?:number;
   Faculty?:FacultyI
   Category?:CategoryI
   createdAt?:string
   Headquarters?:HeadquarterI[]
   HeadquarterProgram?:HeadquarterProgramI
   // Lines?:LineI[]
   LinePrograms?:LineProgramI[]
   HeadquarterPrograms?:HeadquarterProgramI[]
   status?:boolean

}

export interface LineProgramI {
   id?: number;
   LineId:number;
   ProgramId:number;
   Program?:ProgramI
   // Line?: LineI
   status?:boolean

}

export interface LineProgramGroupI {
   id?: number;
   LineProgramId:number;
   GroupId:number;
   LineProgram?:LineProgramI
   LineProgramGroupTeachers?:LineProgramGroupTeacherI[]
   status?:boolean

}
export interface LineProgramGroupTeacherI {
   id?: number;
   LineProgramGroupId:number;
   TeacherId:number;
   // Teacher?:TeacherI
   // RoleInvestigationId?:number;
   LineProgramGroup?:LineProgramGroupI
   status?:boolean

}
