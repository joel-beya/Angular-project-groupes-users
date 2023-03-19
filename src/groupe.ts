import { User } from "./user";

export interface Groupe {
    id_groupe: number;
    nbr_user : number;
    liste_user: User[];

}
