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

      let info=this.storage.storage.getItem('data');
      let userinfo = JSON.parse(info);
      // console.log('存储信息：',userinfo)
      if(!userinfo){
        console.log('未通过',userinfo)
        this.router.navigate(["/login"]);
        return false;
      }else{
        console.log('用户名的键名：',userinfo.username)
        return true;
      }

  }
  
}
