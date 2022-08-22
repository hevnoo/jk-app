import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';
// import { NzModalService } from 'ng-zorro-antd/modal';
// import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {

  //拿到token
  public token:any = this.storage.get('userinfo').token;
  total = 1;//总数量
  loading = false;//是否显示加载中的圈圈
  pageSize = 3;//每页显示的数量
  pageIndex = 1;//当前是第一页

  isVisible = false;
  isOkLoading = false;
  isEditVisible = false;
  isEditOkLoading = false;
  
  keys:any='';
  private get_api: string = 'http://yuqing.itying.com/api/keywordsList'
  private add_api: string = 'http://yuqing.itying.com/api/addKeywords'
  // private get_id_api: string = 'http://yuqing.itying.com/api/oneKeywordsList'
  private edit_api: string = 'http://yuqing.itying.com/api/editKeywords'
  // private del_api:string = 'http://yuqing.itying.com/api/oneKeywordsList'
  
  listOfData: any = [];
  inputData:any = {
    keyword: '',
    may_keyword: '',
    nokeyword: '',
    frequency: ''
  }
  editData:any = {
    id: '',
    keyword: '',
    may_keyword: '',
    nokeyword: '',
    frequency: ''
  };

  constructor(public http:HttpService,
    public storage:StorageService,

    ) { }

  ngOnInit(): void {
    this.get_keywords()
  }
  //获取关键词
  get_keywords(){
    this.http.get(this.get_api,{
      auth: {
        username:this.token,
        password: ''
      }
    })
    .then(
      (res:any)=>{
        // console.log('获取关键词:',res)
        this.listOfData = res.data.result;
      },
      (rej:any)=>{
        console.log(rej)
      }
    )
  }
  //增加关键词
  add_keywords(){
    this.http.post(this.add_api,this.inputData,{
      auth: {
        username:this.token,
        password: ''
      }
    })
    .then(
      (res:any)=>{
        // console.log('增加关键词',res)
        this.get_keywords()
      },
      (rej:any)=>{
        console.log(rej)
      }
    )
  }
  //获取指定 id 的舆情关键词 Api
  get_id(id: any){
    this.isEditVisible = true;
    //传id
    let id_api = 'http://yuqing.itying.com/api/oneKeywordsList?id=' + id;
    this.http.get(id_api,{
      auth: {
        username:this.token,
        password: ''
      }
    })
    .then(
      (res:any)=>{
        this.editData = res.data.result;
        // console.log('editData数据',this.editData)
      },
      (rej:any)=>{
        console.log(rej)
      }
    )
  }
  //执行编辑关键词
  handleEdit(){
    this.isEditOkLoading = true;
    this.http.post(this.edit_api,this.editData,{
      auth: {
        username:this.token,
        password: ''
      }
    })
    .then(
      (res:any)=>{
        // console.log('编辑:',res)
        this.get_keywords()
        this.isEditVisible = false;
      },
      (rej:any)=>{
        console.log(rej)
      }
    )
  }
  //删除关键词
  delete(id: any){
    let flag = confirm('确定要删除吗？')
    if(flag){
      let del_api = 'http://yuqing.itying.com/api/deleteKeywords?id=' + id;
      this.http.get(del_api,{
        auth: {
          username:this.token,
          password: ''
        }
      })
      .then(
        (res:any)=>{
          // console.log('删除成功:',res)
          if(res.data.success == false){
            console.log(res.data.message)
          }
          this.get_keywords()
        },
        (rej:any)=>{
          console.log(rej)
        }
      )
    }

  }

  showModal(): void {
    this.isVisible = true;
    this.inputData={
      keyword: '',
      may_keyword: '',
      nokeyword: '',
      frequency: ''
    };//清空input
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.add_keywords()
      this.isVisible = false;
      this.isOkLoading = false;
    }, 200);
  }
  handleCancel(): void {//公共的取消按钮
    this.isVisible = false;
    this.isEditVisible = false;
  }

  onQueryParamsChange(params:any): void {
    // console.log(params);
  }

}
