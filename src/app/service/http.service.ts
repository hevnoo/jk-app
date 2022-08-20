import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  get(apiurl:string,config?:any){
    if(arguments.length == 1){
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
    }else if(arguments.length == 2){
      return new Promise((resolve,reject)=>{
        axios.get(apiurl,config)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
    }else{
      return new Promise((resolve, reject) => {
        reject("参数错误");
      })
    }
  };

  post(apiurl:string,params:any,config?:any){
    if(arguments.length == 2){
      return new Promise((resolve,reject)=>{
        axios.post(apiurl,params)
        .then(function (response) {
          resolve(response)
          // console.log('post相应的:',response);
        })
        .catch(function (error) {
          reject(error)
          // console.log(error);
        })
      })
    }else if(arguments.length == 3){
      return new Promise((resolve,reject)=>{
        axios.post(apiurl,params,config)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
      })
    }else{
      return new Promise((resolve, reject) => {
        reject("参数错误");
      })
    }
  }

}
