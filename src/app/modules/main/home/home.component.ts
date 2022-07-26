import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    chart:{
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      plotShadow: false,
      type:'pie',
      backgroundColor:'#eee'
    },
    credits:{
      enabled:false//去掉版权
    },
    title:{
      text:'人口分布图'
    },
    tooltip:{
      pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                  color:'black'
              },
              connectorColor: 'silver'
          }
      }
  },
  series: [{
    type:'pie',
    name: '人口数',
    colorByPoint: true,
    data: [{

        name: '深圳',
        y: 6111111,
        sliced: true,
        selected: true
    }, {
        name: '北京',
        y: 6000000,
        sliced: true,
        selected: true
    }, {
        name: '上海',
        y: 5900000
    }, {
        name: '杭州',
        y: 5800000
    }, {
        name: '广州',
        y: 5955555
    }]
}]

  };

  chartOptions2:Highcharts.Options={
    title:{
      text:'舆情柱状图'
    },
    series: [{
      name:'正面舆情',
      type: 'column',
      data: [5, 29, 20,30,26],
    },{
      name:'负面舆情',
      type:'column',
      data:[10,40,50,60,18]
    }
  ],
  }
  
  constructor() { }

  ngOnInit(): void {
  }

 
}
