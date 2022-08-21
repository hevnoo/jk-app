import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public router:Router,
    public storage:StorageService,
    public http:HttpService
    ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve,reject)=>{
          // let info=this.storage.w_storage.getItem('data');
          // let userinfo = JSON.parse(info);
          let userinfo = this.storage.get('userinfo')
          if(!userinfo||!userinfo.username){
            this.router.navigate(["/login"]);
          }else{
            //2、请求接口验证token
            let t_api = "http://yuqing.itying.com/api/validateToken";
            this.http.get(t_api, {
              auth: {
                //这里username: userinfo.token就是token
                username: userinfo.token,
                password: ''
              }
            }).then(
              (res:any) => {      
                if (res.data.success==false && res.data.message=="token_error") {
                  this.router.navigate(["/login"]);
                }else{
                  resolve(true);
                }
              }),
              (rej:any) =>{
                reject(false);
              }
          }
      })
  }
  
}
