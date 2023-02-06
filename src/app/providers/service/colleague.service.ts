import {Injectable} from '@angular/core';
import {Colleague} from "../../models/Colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  colleagues: Colleague[] = [{

    photo: "https://picsum.photos/200/250",
    pseudo: "Gio",
    score: 0,

  },
    {

      photo: "https://picsum.photos/200/251",
      pseudo: "moi",
      score: 0,
    },
    {

      photo: "https://picsum.photos/200/252",
      pseudo: "vin",
      score: 0,
    },
    {

      photo: "https://picsum.photos/200/253",
      pseudo: "lolo",
      score: 0,
    },
    {

      photo: "https://picsum.photos/200/254",
      pseudo: "toi",
      score: 0,
    },
    {
      photo: "https://picsum.photos/200/255",
      pseudo: "paul",
      score: 0,
    },
    {
      photo: "https://picsum.photos/200/256",
      pseudo: "able",
      score: 0,
    }]


  constructor() {
  }
}
