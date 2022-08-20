
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  public api:any='';
  public apiLogin:any='';
  public svgImg='';
  // public svgKey='';
  public loginData={
    username:'',
    password:'',
    verify:'',
    svgKey:''
  }
  isVisible = false;

  constructor(private fb: FormBuilder,
    public http:HttpService,
    public router:Router,
    public storage:StorageService
    ) { }

  ngOnInit(): void {

  }
  ngAfterContentInit(){//dom挂载后；
    this.getCap();
    // this.doLogin();
  }

  getCap(){
    this.api='http://yuqing.itying.com/api/captcha';
    this.http.get(this.api).then(
      (res:any)=>{
        this.svgImg=res.data.svgImg;
        this.loginData.svgKey=res.data.svgKey;
        // console.log(this.svgImg)
        var svgImgDom=document.querySelector('#svgDom');
        if(svgImgDom){
          svgImgDom.innerHTML=this.svgImg;
        }
      },
      (rej:any)=>{
        console.log(rej)
      }
      );
  };
  doLogin(){
    this.apiLogin='http://yuqing.itying.com/api/doLogin';
    this.http.post(this.apiLogin,this.loginData).then(
      (res:any)=>{
        console.log(res);
        if(res.data.success){
          console.log('本地存储的',res.data)
          this.storage.set('userinfo',res.data.result);
          this.router.navigate(['/main/home']);
          // if (!this.storage.w_storage) {
          //   console.log('不支持localStorage')
          // } else {
          //   // let storage = window.localStorage;
          //   let dataValue = JSON.stringify(this.loginData)
          //   this.storage.w_storage.setItem('data', dataValue)
          // }
        }else{
          alert(res.data.message)
        }
      },
      (rej:any)=>{
        console.log(rej)
      }
      );
  };

  showModal(): void {
    this.isVisible = true;
    if (!this.storage.w_storage) {
      console.log('不支持localStorage')
    } else {
      // let storage = window.localStorage
      this.storage.w_storage.clear()         // 删除所有键值对
      // storage.removeItem('a') // 删除指定的键值对
    }
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.loginData.username='admin';
    this.loginData.password='123456';
    this.loginData.verify='asdf';
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
 

}
