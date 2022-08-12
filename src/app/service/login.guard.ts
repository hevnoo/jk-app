import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public router:Router,public storage:StorageService){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // var userinfo=this.storage.get('userinfo');
      // if(!userinfo || !userinfo.username){
      //   this.router.navigate(["/login"])
      //   return false;
      // }else{
      // return true;
      // }

      return true;
  }
  
}
