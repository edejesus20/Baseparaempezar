// import { AdministrativeI, ChargeAdministrativeI } from "../user/administrative";
// import { StudentI } from "../user/student";
// import { TeacherI } from "../user/teacher";
import { FacultyI } from "./faculty";
import { ProgramI } from "./program";
import { UniversityI } from "./university";

export interface HeadquarterI {
   id?: number;
   name: string;
   cordinatorInvestigation: string;
   UniversityId:number;
   createdAt?:string;
   University?:UniversityI
   Programs?:ProgramI[]
   // Administratives?:AdministrativeI[]
   HeadquarterProgram?:HeadquarterProgramI
   HeadquarterPrograms?:HeadquarterProgramI[]
   // ChargeAdministratives?:ChargeAdministrativeI[]

}

export interface HeadquarterProgramI {
   id?: number;
   ProgramId:number;
   HeadquarterId:number;
   ChargeAdministrativeId:number
   // AdministrativeId:number;
   Programs?:ProgramI[]
   Program?:ProgramI
   Headquarters?:HeadquarterI[]
   Headquarter?:HeadquarterI
   // Administratives?:AdministrativeI[]
   HeadquarterProgramTeacher?:HeadquarterProgramTeacherI
   HeadquarterProgramStudent?:HeadquarterProgramStudentI
   // Administrative?:AdministrativeI
   // ChargeAdministratives?:ChargeAdministrativeI[]
   // ChargeAdministrative?:ChargeAdministrativeI
   status?:boolean

}
export interface HeadquarterProgramTeacherI {
   id?: number;
   TeacherId:number;
   HeadquarterProgramId:number;
   ResearchBondingId:number,
   // Teacher?:TeacherI
   HeadquarterProgram?:HeadquarterProgramI
   status?:boolean;

}
export interface HeadquarterProgramStudentI {
   id?: number;
   StudentId:number;
   // Student?:StudentI
   HeadquarterProgramId:number;
   HeadquarterProgram?:HeadquarterProgramI
   status?:boolean
}