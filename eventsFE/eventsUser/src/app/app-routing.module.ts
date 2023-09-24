import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { RetrieveEventsComponent } from './retrieve-events/retrieve-events.component';

const routes: Routes = [{ path:'create-event',component:CreateNewEventComponent, pathMatch:'full'},
{ path:'get-event',component:RetrieveEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }

