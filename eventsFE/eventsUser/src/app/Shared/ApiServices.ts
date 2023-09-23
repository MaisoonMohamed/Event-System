import { HttpClient } from '@angular/common/http';
import { EventDto } from '../Models/EventDto.cs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ApiServices {
    constructor(private http: HttpClient) {

    }

  public createEvent(eventdto: EventDto): Observable<any> {
    debugger
    const url = "/api/events";
    return this.http.post<any>(url, eventdto);
  }
}