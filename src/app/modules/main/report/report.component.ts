// import { JkService } from './../services/jk.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  date = null;
  isEnglish = false;
  mode = 'date';

  total = 1;//总数量
  loading = false;//是否显示加载中的圈圈
  pageSize = 8;//每页显示的数量
  pageIndex = 1;//当前是第一页

  listOfData = [
    {
      title: '习近平将出席深圳经济特区建立40周年庆祝大会',
      urL:"http://www.xinhuanet.com/politics/leaders/2020-10/12/c_1126596607.htm",
      type: '正面舆情',
      keyword: '深圳',
      site: "人民网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '台独”分子挑拨中欧关系，还试图策反大陆人员',
      url:"https://3w.huanqiu.com/a/5e93e2/40Fzu8qFtlv?agt=8",
      type: '负面舆情',
      keyword: '台独',
      site: "环球网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '2020诺贝尔经济学奖公布！两位美国经济学家获奖',
      type: '正面舆情',
      keyword: '诺贝尔',
      site: "大众网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '习近平将出席深圳经济特区建立40周年庆祝大会',
      urL:"http://www.xinhuanet.com/politics/leaders/2020-10/12/c_1126596607.htm",
      type: '正面舆情',
      keyword: '深圳',
      site: "人民网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '台独”分子挑拨中欧关系，还试图策反大陆人员',
      url:"https://3w.huanqiu.com/a/5e93e2/40Fzu8qFtlv?agt=8",
      type: '负面舆情',
      keyword: '台独',
      site: "环球网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '2020诺贝尔经济学奖公布！两位美国经济学家获奖',
      type: '正面舆情',
      keyword: '诺贝尔',
      site: "大众网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '2020诺贝尔经济学奖公布！两位美国经济学家获奖7',
      type: '正面舆情',
      keyword: '诺贝尔',
      site: "大众网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",

    },
    {
      title: '2020诺贝尔经济学奖公布！两位美国经济学家获奖8',
      type: '正面舆情',
      keyword: '诺贝尔',
      site: "大众网",
      update_time:'2012-12-34',
      add_time:"2012-12-34",
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // this.total=24;
    this.total=this.listOfData.length*3;//把数组里的实时数据*3传给totle

  }

  onQueryParamsChange(params:any): void {
    console.log(params);
    // const { pageSize, pageIndex, sort, filter } = params;
  }
}
