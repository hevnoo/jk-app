import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AlarmComponent } from './alarm/alarm.component';
//把app模块的zorro引用拿过来
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
//上面是zorro对应的模块
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageModule } from 'ng-zorro-antd/message';
//pipe引用方法和组件相似
import { DataTimePipe } from 'src/app/pipe/data-time.pipe';
import { NegativeReportComponent } from './negative-report/negative-report.component';
import { PositiveReportComponent } from './positive-report/positive-report.component';
//


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ReportComponent,
    KeywordsComponent,
    AlarmComponent,
    DataTimePipe,
    NegativeReportComponent,
    PositiveReportComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzTableModule,
    HighchartsChartModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzDatePickerModule,
    NzSelectModule,
    NzSpaceModule,
    NzDividerModule ,
    NzModalModule,
    NzPaginationModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N,useValue: zh_CN,},
  ],
  //providers也是zorro对应的，也要引过来
})
export class MainModule { }
