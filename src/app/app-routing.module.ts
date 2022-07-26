import { MainModule } from './modules/main/main.module';
import { LoginModule } from './modules/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'main',
    loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule)
  },
  // {
  //   path:'**',
  //   loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)
  // },
    {
    path:'**',
    loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
