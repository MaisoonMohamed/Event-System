import { Component,Input,OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EventDto } from '../Models/EventDto.cs';
import { ApiServices } from '../Shared/ApiServices';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent implements OnInit {
  @Input('eventDto') eventDto:EventDto={} as EventDto;
  @Input('updateclicked') updateclicked:boolean=false;
  @Input('eventidupdated') eventidupdated:number=0;
  
  @ViewChild('eventform') form!:NgForm;
  eventmodel:EventDto={} as EventDto;
  dateTime = new Date();
  output:boolean=false;
  submited:boolean=false;
 constructor(private apiservices:ApiServices,private httpClient:HttpClient)
 {
  
 }

 ngOnInit()
 {

 }
 ngOnChanges()
 {
 
 }
 
 
  CreateEvent()
  {
    debugger;
    if(!this.updateclicked){
    this.apiservices.createEvent(this.eventDto).subscribe((response) => {
      if(response==null)
      {
        alert("Owner already has an event");
      }
      else{
      alert("Event Created successfully");}
    });
  }
  else{

    
    this.eventmodel={
      id:this.eventidupdated,
      owner:this.eventDto.owner,
      date:this.eventDto.date,
      title:this.eventDto.title,
      details:this.eventDto.details
    }
    this.apiservices.UpdateEvent(this.eventidupdated,this.eventmodel).subscribe((response)=>{
      if(response==null)
      {
        alert("Owner already has an event");
      }else{
      alert("updated successfully");
  }})
  }

  
  }

  isValidForm()
  {
    if(this.eventDto.date && this.eventDto.owner && this.eventDto.details&& this.eventDto.title)
    {
      
      this.CreateEvent()
      return true;
    }
    alert("Please fill in the form")
    
    return false;
  }
}
