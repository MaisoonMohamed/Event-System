import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventDto } from '../Models/EventDto.cs';
import { ApiServices } from '../Shared/ApiServices';
@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent {
  @Input() eventDto!:EventDto;
  
  dateTime = new Date();
  output:boolean=false;
 constructor(private apiservices:ApiServices)
 {
  
 }
  CreateEvent()
  {
    debugger
   
    this.apiservices.createEvent(this.eventDto).subscribe((response: any) => {
      return response;
    });
  
  }
}
