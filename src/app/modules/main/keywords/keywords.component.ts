import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {


  isVisible = false;
  isOkLoading = false;
  keys:any='';

  inputdata:any= {
    keyword: '',
    may_keyword: '',
    nokeyword: '',
    frequency: ''
  }
  listOfData= [
    {
      keyword: '大庆油田',
      may_keyword: '中国石油',
      nokeyword: "延长石油",
      frequency: '100'
    },
    {
      keyword: '数字人民币',
      may_keyword: '人民币',
      nokeyword: "钱",
      frequency: '100'
    },
    {
      keyword: 'hhh',
      may_keyword: 'hevn',
      nokeyword: '',
      frequency: '11'
    },
    
  ];

  
  constructor() { }

  ngOnInit(): void {
    // console.log(this.keys)
  }


  showModal(): void {
    this.isVisible = true;
    this.inputdata={
      keyword: '',
      may_keyword: '',
      nokeyword: '',
      frequency: ''
    };//在增加后再次点击增加按钮就清空上一次input中输入的内容，所以赋值空
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.listOfData.push(this.inputdata);
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  xiugai(){
    console.log(this.keys)
  }
  shanchu(){
    console.log()
  }


}
