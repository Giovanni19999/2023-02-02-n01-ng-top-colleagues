import {Component} from '@angular/core';
import {ColleaguComplet} from "../../../models/colleagu-complet";
import {ColleagueService} from "../../../providers/service/colleague.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'tc-colleague-complet',
  templateUrl: './colleague-complet.component.html',
  styleUrls: ['./colleague-complet.component.scss']
})
export class ColleagueCompletComponent {

  colleague: ColleaguComplet = {
    photo: "",
    score: 0,
    pseudo: "",
    first: "",
    last: ""
  };

  constructor(private serviceCo: ColleagueService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const pseudo = paramMap.get("pseudo")
      if (pseudo) {
        this.serviceCo.getCollegue(pseudo).subscribe(value => {
          this.colleague = value
        })
      }

    })


  }

  back() {
    this.router.navigateByUrl("/colleagues")
  }
}
