import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(apiurl:string){
    return new Promise((resolve,reject)=>{
      axios.get(apiurl)
      .then(function (response) {
        resolve(response)
        // console.log(response);
      })
      .catch(function (error) {
        reject(error)
        // console.log(error);
      })
    })
  };
  post(apiurl:string,params:any){
    return new Promise((resolve,reject)=>{
      axios.get(apiurl,params)
      .then(function (response) {
        resolve(response)
        console.log(response);
      })
      .catch(function (error) {
        reject(error)
        // console.log(error);
      })
    })
  }
}
