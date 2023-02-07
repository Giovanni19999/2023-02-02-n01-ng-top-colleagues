import {LikeHate} from "./LikeHate";
import {Colleague} from "./Colleague";

export interface Vote {
  vote: LikeHate;
  colleague: Colleague;
  score: number
}
