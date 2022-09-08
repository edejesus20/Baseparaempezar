// import { AdministrativeI } from 'src/app/models/user/administrative';
import { HeadquarterI } from './headquarter';
import { ProgramI } from './program';
import { UniversityI } from './university';
export interface FacultyI {
    id?: number;
    name: string;
    AdministrativeId?: number;
    createdAt?: string;
    updatedAt?: string;
    // Administrative?:AdministrativeI
    Programs?:ProgramI[]
    UniversityId?:number;
    University?:UniversityI
 }