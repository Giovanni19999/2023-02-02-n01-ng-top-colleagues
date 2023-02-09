import {Injectable} from '@angular/core';
import {Colleague} from "../../models/Colleague";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs";
import {CollegueForm} from "../../models/collegue-form";
import {ColleaguComplet} from "../../models/colleagu-complet";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  url = "https://dev.cleverapps.io/api/v2/colleagues"

  colleagueSub = new Subject<Colleague[]>();

  colleaguesObs = this.colleagueSub.asObservable()
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  refresh() {
    this.http.get<Colleague[]>(this.url).subscribe(value => this.colleagueSub.next(value))
  }

  getCollegue(pseudo: string) {
    return this.http.get<ColleaguComplet>(this.url + "/" + pseudo)
  }

  add(newColl: Partial<CollegueForm>) {
    this.http.post<CollegueForm>(this.url, newColl, this.httpOptions).subscribe();
  }


  constructor(private http: HttpClient) {
    this.http.get<Colleague[]>(this.url).subscribe(value => this.colleagueSub.next(value))

  }
}
