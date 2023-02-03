import {Component} from '@angular/core';
import {Colleague} from "../../models/Colleague";
import {Vote} from "../../models/vote";
import {LikeHate} from "../../models/LikeHate";

@Component({
  selector: 'tc-list-colleague',
  templateUrl: './list-colleague.component.html',
  styleUrls: ['./list-colleague.component.scss']
})
export class ListColleagueComponent {
  listCo: Colleague[] = [
    {
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
    }
  ]

  vote: Vote = {
    vote: LikeHate.Like,
    colleague: {
      photo: "",
      pseudo: "moi",
      score: 2
    }
  }


  voted(vote: Vote) {

    this.vote = vote
  }
}
