import { Pipe, PipeTransform } from '@angular/core';
// import sd from 'silly-datetime';

/*
1、npm i silly-datetime --save

2、import sd from 'silly-datetime'

3、sd.format(new Date(), 'YYYY-MM-DD HH:mm');
*/

@Pipe({
  name: 'dataTime'
})
export class DataTimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //value在服务器保存的是10位的时间戳  js 里面要使用的时间戳是13位
    // return sd.format(value*1000, 'YYYY-MM-DD HH:mm');
  }

}
