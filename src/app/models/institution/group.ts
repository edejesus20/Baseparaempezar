// import { LineI, ThematicI } from "../projet/line";
// import { AnexosI, TeacherI } from "../user/teacher";
import { CategoryGroupI } from "./category";
import { HeadquarterProgramI } from "./headquarter";
import { LineProgramGroupI, ProgramI } from "./program";
import { GroupInvestigatorCollaboratorI, 
    // GroupStudentI 
} from "./roles_investigation";
import { SeedbedI } from "./seedbed";



export interface GroupI {
    id?: number;
    name: string;
    HeadquarterProgramId:number
    TeacherId:number
    CategoryGroupId?:number
    Anexo?:string
    DetailGroupId?:string
    DetailGroup?:DetailGroupI
    CategoryGroup?:CategoryGroupI
    HeadquarterProgram?:HeadquarterProgramI
    Program?:ProgramI,
    GroupLines?:GroupLineI[]
    Anexos?:any[]
    AnexosGroups?:AnexosGroupI[]
    LineProgramGroups?:LineProgramGroupI[]

    InvestigatorCollaborators?:any[]
    lines?:any[]
    knowledge_areas?:any[] | Knowledge_areaI[]
    GroupKnowledge_areas?:GroupKnowledge_areaI[]
    Seedbeds?:any[]

    GroupTeachers?:GroupTeacherI[]
    GroupInvestigatorCollaborators?:GroupInvestigatorCollaboratorI[],
    // GroupStudents?:GroupStudentI[]
}



export interface DetailGroupI {
    id?: number;
    ObjetivoGeneral: string;
    group_code:string
    resolution:string
    Link_gruplac:string
    ObjetivosEspecificos: string;
    Mision: string;
    Vision: string
    Perfil:string
    Metas:string
    Resultados?: string
    Sector: string
}


export interface GroupTeacherI {
    id?: number;
    GroupId:number;
    RoleGroupTeacherId:number
    TeacherId:number;

    Group?:GroupI
    // Teacher?:TeacherI
    RoleGroupTeacher?:RoleGroupTeacherI

    GroupTeacherLines:GroupTeacherLineI
    status?:boolean
}


export interface RoleGroupTeacherI {
    id?: number;
    name: string;
}

export interface GroupTeacherLineI {
    GroupTeacherId:number;
    GroupLineId:number;

    GroupTeacher?:GroupTeacherI
    GroupLine?:GroupLineI
    GroupLines?:GroupLineI[]
    status?:boolean
}


export interface GroupLineI {
    id?: number;
    LineId:number;
    GroupId:number;
    // Line?:LineI;
    Group?:GroupI
    GroupLineThematics?:GroupLineThematicI[]
    status?:boolean
}

export interface GroupLineThematicI {
    GroupLineId:number;
    ThematicId:number;
    GroupLine?:GroupLineI
    // Thematic?:ThematicI
    status?:boolean

}


export interface GroupLineSeedbedI {
    id?: number;
    GroupLineId:number;
    SeedbedId:number;
    GroupLine?:GroupLineI
    status?:boolean
}


// export interface GroupLineTeacherI {
//     id?: number;
//     GroupLineId:number;
//     TeacherId:number;
//     RoleInvestigationId:number;
//     Teacher?:TeacherI
//     RoleInvestigation?:RoleInvestigationI
//     GroupLine?:GroupLineI
//     status?:boolean
// }

export interface AnexosGroupI {
    id?: number;
    GroupId:number;
    AnexoId:number;
    // Anexo?:AnexosI
    status?:boolean

}

export interface Knowledge_areaI{
    id?: number;
    name: string;
    Groups?:GroupI[]
}

export interface GroupKnowledge_areaI {
    id?: number;
    GroupId:number;
    Knowledge_areaId:number;
    Knowledge_area?:Knowledge_areaI
    status?:boolean
}
