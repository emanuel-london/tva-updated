import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {
  RiverTrekContentsComponent,
  LevelComponent,
  RiverTrekStartComponent,
  TrekContentsComponent,
  StartComponent,
  AreaComponent,
  SliderComponent,
  UserDashboard,
  SelectBandComponent,
  WelcomeComponent,
  UserNavComponent,
  MapComponent,
} from './components/index';

// User AuthGuard Components
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';



const routes: Routes = [
  { path: '', component: LevelComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'level' , component: LevelComponent },
  { path: 'choose' , component: AreaComponent },
  { path: 'contents' , component: TrekContentsComponent },
  { path: 'start' , component: StartComponent },
  { path: 'trek-start' , component: RiverTrekStartComponent },
  { path: 'trek-content' , component: RiverTrekContentsComponent  },
  { path: 'map', component: MapComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],


exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
