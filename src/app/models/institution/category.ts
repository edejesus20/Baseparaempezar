import { GroupI } from './group';
import { ProgramI } from './program';
export interface CategoryI {
    id?: number;
    name: string;
    Programs?:ProgramI[]

}

export interface CategoryGroupI {
    id?: number;
    name: string;
    date: string;
    // GroupId: number;
    Groups?:GroupI
}
