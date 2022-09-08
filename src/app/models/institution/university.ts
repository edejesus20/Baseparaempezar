import { FacultyI } from "./faculty";
import { HeadquarterI } from "./headquarter";

export interface UniversityI {
    id?: number;
    name: string;
    nit: string;
    addres: string;
    createdAt?:string
    Headquarters?:HeadquarterI[]
    Faculties?:FacultyI[]
}