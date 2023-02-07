import {Injectable} from '@angular/core';
import {Colleague} from "../../models/Colleague";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  url = "https://dev.cleverapps.io/api/v2/colleagues"

  colleagues: Observable<Colleague[]>

  refresh() {
    this.colleagues = this.http.get<Colleague[]>(this.url)
  }


  constructor(private http: HttpClient) {
    this.colleagues = this.http.get<Colleague[]>(this.url)
  }
}
