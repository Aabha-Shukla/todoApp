import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List in Angular';
  list:any[]=[];
  show=false;
  count = 0;

  data=10;

  addTask(data:string){
    this.list.push({id:this.list.length,name:data});
    console.warn(this.list);
    this.show=true;
  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(data=>data.id!==id);
  }

  counter(type:string){
    if(type==='add'){
      this.count++;
    }
    else{
      this.count--; 
    }

      // type==='add'? this.count-- : this.count++;
  }
}
