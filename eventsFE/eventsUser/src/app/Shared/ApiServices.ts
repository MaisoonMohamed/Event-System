import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = "https://localhost:44303/api/events";
    return this.http.post<any>(url, eventdto,httpOptions);
  }

  public getEvents()
  {
    const url = "https://localhost:44303/api/events";
    return this.http.get<any>(url);
  }

  public UpdateEvent(id:number,eventdto: EventDto)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url=`https://localhost:44303/api/events/update/${id}`;
    
    return this.http.put<any>(url,eventdto,httpOptions);
  }

  public DeleteEvent(id:number)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url=`https://localhost:44303/api/events/delete/${id}`;
    return this.http.delete<any>(url,httpOptions);
  }
}