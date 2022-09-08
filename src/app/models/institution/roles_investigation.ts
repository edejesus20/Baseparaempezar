// import { InvestigatorCollaboratorI } from "../user/investigator_colabolator";
// import { StudentI } from "../user/student";
import { GroupI, RoleGroupTeacherI } from "./group";
import { LineProgramGroupTeacherI } from "./program";

// export interface RoleInvestigationI {
//     id?: number
//     name: string;
//     LineProgramGroupTeachers?:LineProgramGroupTeacherI[]
//     GroupStudents?:GroupStudentI[]
//     GroupInvestigatorCollaborators?:GroupInvestigatorCollaboratorI[]
//     Users?:undefined | any[]
// }

export interface GroupInvestigatorCollaboratorI {
    id?: number
    GroupId:number;
    RoleGroupTeacherId:number;
    RoleGroupTeacher?:RoleGroupTeacherI
    InvestigatorCollaboratorId:number;
    // InvestigatorCollaborator?:InvestigatorCollaboratorI
    Group?:GroupI,
    status?:boolean
}

// export interface GroupStudentI {
//     id?: number
//     GroupId:number;
//     // RoleInvestigationId:number
//     StudentId:number;
//     Student?:StudentI
//     Group?:GroupI
//     status?:boolean


// }