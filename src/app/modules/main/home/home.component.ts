import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	@ViewChild("pieChart") pieChart: any;
	@ViewChild("columnChart") columnChart: any;

	userinfo: any;
	Highcharts: typeof Highcharts = Highcharts;
	//饼状图
	chartOptions1: Highcharts.Options = {
		chart: {
			plotBackgroundColor: '',
			plotBorderWidth: 0,
			plotShadow: false,
			type: 'pie',
			backgroundColor: "#eee"
		},
		credits: {
			enabled: false   //去掉版权
		},
		title: {
			text: '舆情关键词分布图'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: 'black'
					}
				}
			}
		},
		series: []

		// {
		// 	type: "pie",   //注意  在angular里面必须配置
		// 	name: '人口数',
		// 	colorByPoint: true,
		// 	data: [
		// 		{
		// 		name: '深圳',
		// 		y: 6111111,
		// 		sliced: true,
		// 		selected: true
		// 	}, {
		// 		name: '北京',
		// 		y: 8312421
		// 	}, {
		// 		name: '上海',
		// 		y: 5312421
		// 	}, {
		// 		name: '广州',
		// 		y: 4532421
		// 	}]
		// }
	};

	//柱状图
	chartOptions2: Highcharts.Options = {
		chart: {
			type: 'column'
		},
    credits: {
			enabled: false   //去掉版权
		},
		title: {
			text: '舆情分布'
		},
		subtitle: {
			text: '数据来源: o.com'
		},
		xAxis: {
			categories: [
				'一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
			],
			crosshair: true
		},
		yAxis: {
			min: 0,
			title: {
				text: '舆情数'
			}
		},
		tooltip: {
			// head + 每个 point + footer 拼接成完整的 table
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			column: {
				borderWidth: 0
			}
		},
		// https://api.highcharts.com.cn/#plotOptions
		series: []
		// {
		// 	type: "column",
		// 	name: '正面舆情',
		// 	data: [439, 715, 104, 1292, 144, 176.0]
		// }, {
		// 	name: '负面舆情',
		// 	type: "column",
		// 	data: [299, 104, 106.4, 129.2, 144.0, 176.0]
		// }
	}
	constructor(private http: HttpService, private storage: StorageService) {
		this.userinfo = this.storage.get("userinfo");
	}

	ngOnInit(): void {
		this.getPieData();
		this.getColumnData();
	}

	getPieData() {
		var api = "http://yuqing.itying.com/api/areaOptions";
		this.http.get(api, {
			auth: {
				username: this.userinfo.token,
				password: ''
			}
		}).then((response: any) => {
			console.log(response);
			console.log(this.pieChart.chart)
			let tempArr = [];
			for (let i = 0; i < response.data.result.length; i++) {
				if (i == 0) {
					tempArr.push({
						name: response.data.result[i].title,
						y: response.data.result[i].count,
						sliced: true,
						selected: true
					})
				} else {
					tempArr.push({
						name: response.data.result[i].title,
						y: response.data.result[i].count
					})
				}
			}

			this.pieChart.chart.addSeries({
				type: "pie",   //注意  在angular里面必须配置
				name: '舆情数',
				colorByPoint: true,
				data: tempArr
			})
			//更新饼状图

			// this.pieChart.chart.update({
			// 	series: [
			// 		{
			// 			type: "pie",   //注意  在angular里面必须配置
			// 			name: '人口数',
			// 			colorByPoint: true,
			// 			data: [
			// 				{
			// 					name: '深圳',
			// 					y: 6111111,
			// 					sliced: true,
			// 					selected: true
			// 				}, {
			// 					name: '北京',
			// 					y: 8312421
			// 				}, {
			// 					name: '上海',
			// 					y: 5312421
			// 				}, {
			// 					name: '广州',
			// 					y: 4532421
			// 				}]
			// 		}
			// 	]
			// })

		})



	}

	getColumnData() {
		var api = "http://yuqing.itying.com/api/columnOptions";
		this.http.get(api, {
			auth: {
				username: this.userinfo.token,
				password: ''
			}
		}).then((response: any) => {
			console.log(response);
			var columnData = response.data.result;
			for (let i = 0; i < columnData.length; i++) {
				this.columnChart.chart.addSeries({
					name: columnData[i].title,
					data: columnData[i].data,
					type: "column",
				})
        //调用chart.addSeries()内置方法添加数据
			}
			//更新一列数据
			// this.columnChart.chart.series[0].update({
			// 	data: [1229.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
			// });

			//更新所有数据
			// this.columnChart.chart.update(
			// 	{
			// 		series: [

			// 			{ name: "正面舆情", data: [439, 715, 104, 1292, 144, 176.0,439, 715, 104, 1292, 144, 176.0]},
			// 			{ name: "负面舆情", data: [299, 104, 106.4, 129.2, 144.0, 176.0,299, 104, 106.4, 129.2, 144.0, 176.0]},
			// 		]
			// 	}
			// )

		})
	}
 
}
