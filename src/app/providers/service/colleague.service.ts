import {Injectable} from '@angular/core';
import {Colleague} from "../../models/Colleague";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  url = "https://dev.cleverapps.io/api/v2/colleagues"

  colleagueSub = new Subject<Colleague[]>();

  colleaguesObs = this.colleagueSub.asObservable()


  refresh() {
    this.http.get<Colleague[]>(this.url).subscribe(value => this.colleagueSub.next(value))
  }


  constructor(private http: HttpClient) {
    this.http.get<Colleague[]>(this.url).subscribe(value => this.colleagueSub.next(value))

  }
}
