import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'tours',component:TourComponent},
  {path:'contact',component:ContactComponent},
  {path:'faq',component:FaqComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
