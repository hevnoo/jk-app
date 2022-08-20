import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public w_storage:any=window.localStorage;
  
  constructor() { }
  
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key:string){    
    // return JSON.parse(localStorage.getItem(key))
    return JSON.parse(this.w_storage.getItem(key))
  }
  remove(key:string){
    localStorage.removeItem(key);
  }

}
