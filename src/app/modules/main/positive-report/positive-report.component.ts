import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';
@Component({
  selector: 'app-positive-report',
  templateUrl: './positive-report.component.html',
  styleUrls: ['./positive-report.component.scss']
})
export class PositiveReportComponent implements OnInit {

  start_time="";
  end_time="";
  start_unix_time:number=0;
  end_unix_time:number=0;
  loading=false;  //是否显示加载中的圈圈
  total=1;  //总数量
  pageSize=8;  //每页显示的数量
  pageIndex=1; //当前是第一页
  userinfo:any;  //用户信息  
  listData = [
    {
      title:'',
      keywords:'',
      type:'',
      url:'',
      add_time:'',
    }
  ]; //舆情报告信息
  constructor(private http: HttpService, private storage: StorageService) {
    this.userinfo = this.storage.get("userinfo");
   }
  ngOnInit(): void {
    this.getReportList()
  }
  getReportList():void{
    this.loading=true;
    var api = `http://yuqing.itying.com/api/reportList?page=${this.pageIndex}&pageSize=${this.pageSize}&startTime=${this.start_unix_time}&endTime=${this.end_unix_time}&type=1`;
    this.http.get(api, {
      auth: {
        username: this.userinfo.token,
        password: ''
      }
    }).then((res: any) => {    
      //总数量
      this.total=res.data.total;
      //舆情报告信息
      this.listData=res.data.result;
      //隐藏loading
      this.loading=false;
    })
  }
  onQueryParamsChange(params:any){
    console.log(params.pageIndex)
    this.pageIndex=params.pageIndex;
    this.getReportList();
  }
  //执行搜索
  doSearch(){
 
    //起始日期
    var startDate=new Date(this.start_time);
    this.start_unix_time=Math.ceil(startDate.getTime()/1000);
    //结束日期
    var endDate=new Date(this.end_time);
    this.end_unix_time=Math.ceil(endDate.getTime()/1000);

    this.getReportList();
  }
}
