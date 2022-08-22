import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  userinfo: any;
  alarm = {
    tel: "",
    email: ""
  }
  constructor(private http: HttpService, 
    private storage: StorageService, 
    private message: NzMessageService
  ) {
    this.userinfo = this.storage.get("userinfo");
  }
  ngOnInit(): void {
    this.getAlarm();
  }
  //弹出提示信息 success  error
  createMessage(type: string, msg: string): void {
    this.message.create(type, msg);
  }
  //获取报警设置
  getAlarm() {
    var api = "http://yuqing.itying.com/api/alarmList";
    this.http.get(api, {
      auth: {
        username: this.userinfo.token,
        password: ''
      }
    }).then((res: any) => {
      // console.log(res);
      if (res.data.success == true) {
        this.alarm.tel = res.data.result.tel;
        this.alarm.email = res.data.result.email;
      }
    })
  }
  //修改设置
  setAlarm() {
    var api = "http://yuqing.itying.com/api/editAlarm";
    this.http.post(api, this.alarm, {
      auth: {
        username: this.userinfo.token,
        password: ''
      }
    }).then((res: any) => {
      // console.log(res);
      if (res.data.success == true) {
        this.createMessage("success","修改设置成功");
      }else{
        this.createMessage("error","修改设置失败");
      }
    })
  }
}
