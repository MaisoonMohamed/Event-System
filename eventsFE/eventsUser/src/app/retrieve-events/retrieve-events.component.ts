import { Component, Injector, OnInit } from '@angular/core';
import { ApiServices } from '../Shared/ApiServices';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDto } from '../Models/EventDto.cs';

@Component({
  selector: 'app-retrieve-events',
  templateUrl: './retrieve-events.component.html',
  styleUrls: ['./retrieve-events.component.css']
})
export class RetrieveEventsComponent implements OnInit{
  private route : ActivatedRoute;
 events: EventDto[] = [];
 eventid:number=0;
 updateclick:boolean=false;
  constructor(private injector: Injector,private apiservices:ApiServices)
 {
  this.route = injector.get<ActivatedRoute>(ActivatedRoute);
 }
 ngOnInit(): void {
  debugger;
  
  this.GetEvents();
  
 }


 DeleteEvent(eventid:number)
 {
 
  this.apiservices.DeleteEvent(eventid).subscribe((response)=>{
    alert("event is deleted");
  }
  );
 }
  GetEvents()  
  {
    debugger
   
    this.apiservices.getEvents().subscribe((
     res=>{
      console.log(res);
      
      if (res != null ) {
        this.events = res;
        
        } else {
        alert("No Event exists");
        }
     } 
    ));
  
  }
}
