// import { AnexosTrainingTeacherI, TeacherI } from "../user/teacher";

export interface TrainingI {
    id?: number;
    name: string;
    createdAt?:string
    // Teachers?:TeacherI[]
    TrainingTeacher?:TrainingTeacherI
    TrainingTeachers?:TrainingTeacherI[],

    
}

export interface TrainingTeacherI {
    id?: number;
    name: string;
    date_graduation: string;
    name_institution: string;
    resolution_convalidation: string;
    degree_certificate: string;
    resolution_certificate:string
    TeacherId:number;
    TrainingId:number
    // Teacher?:TeacherI
    Training?:TrainingI
    // AnexosTrainingTeachers?:AnexosTrainingTeacherI[]

}