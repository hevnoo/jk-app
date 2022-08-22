import { LoginGuard } from './../../service/login.guard';
import { LoginComponent } from './../login/login.component';
import { MainComponent } from './main.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';
import { HomeComponent } from './home/home.component';
import { NegativeReportComponent } from './negative-report/negative-report.component';
import { PositiveReportComponent } from './positive-report/positive-report.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path:'',component:MainComponent,
    canActivate:[LoginGuard],
    children:[
        {
          path:'home',component:HomeComponent
        },
        {
          path:'alarm',component:AlarmComponent
        },
        {
          path:'keywords',component:KeywordsComponent
        },
        {
          path:'report',component:ReportComponent
        },
        {
          path:'negative-report',component:NegativeReportComponent
        },
        {
          path:'positive-report',component:PositiveReportComponent
        }
    ],
  },
  {
    path:'login',component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
