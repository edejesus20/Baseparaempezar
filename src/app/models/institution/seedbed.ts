// import { LineI, ThematicI } from "../projet/line";
// import { StudentI } from "../user/student";
// import { TeacherI } from "../user/teacher";
import { GroupI, GroupLineSeedbedI } from "./group";
import { HeadquarterProgramI } from "./headquarter";


export interface SeedbedI {
    id?: number;
    creation_date: string;
    approval_date?:string;
    name: string;
    TeacherId: number
    Anexo?:string
    HeadquarterProgramId: number
    GroupId: number

    Group?:GroupI
    // Teacher?:TeacherI
    DetailSeedbedId?:string
    DetailSeedbed?:DetailSeedbedI

    HeadquarterProgram?:HeadquarterProgramI
    Program?:any
    SeedbedStudents?:SeedbedStudentI[]

    // GroupLineSeedbeds?:GroupLineSeedbedI[]
    lines?:any[]
    // Students?:StudentI[];
    SeedbedLines?:SeedbedLineI[]
  

}

export interface SeedbedLineI {
    id?: number;
    LineId:number;
    SeedbedId:number;
    Seedbed?:SeedbedI
    // Line?: LineI,
    SeedbedLineThematics?:SeedbedLineThematicI[]
    status?:boolean
}
export interface SeedbedLineThematicI {
    id?: number;
    SeedbedLineId:number;
    ThematicId:number;
    // Thematic?:ThematicI
    SeedbedLine?:SeedbedLineI
    status?:boolean
}
export interface DetailSeedbedI {
    id?: number;
    ObjetivoGeneral: string;
    ObjetivosEspecificos: string;
    Mision: string;
    Vision: string;
    estrategias: string;
    resolution:string
    article:string
}


export interface SeedbedStudentI {
    id?: number;
    name: string;
    date_firt: string;
    date_end: string;
    hours:string
    Seedbed?:SeedbedI
    // Student?:StudentI
    status?:boolean

}