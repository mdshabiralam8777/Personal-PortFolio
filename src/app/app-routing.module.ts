import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MoreProjectsComponent } from './components/more-projects/more-projects.component';

const routes: Routes = [
   {path:'',component:AboutComponent},
   {path:'projects',component:MoreProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
