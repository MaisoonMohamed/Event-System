import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';

const routes: Routes = [{ path:'create-event',component:CreateNewEventComponent, pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }

