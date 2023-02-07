import {ColleaguComplet} from "./colleagu-complet";

export interface VotePoste {
  colleague: ColleaguComplet,
  like_hate: string,
  score: number,
  created_date: string

}
