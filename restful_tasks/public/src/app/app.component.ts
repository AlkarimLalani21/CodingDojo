import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  tasks:any; 
  selectedTask: any;
  newTask: any;
  singleTask: any;
  // selectedTasks: Task;

  constructor(private _httpService: HttpService){ }
  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = { title: "", description: "" };
  }
  
  selectTask(task){
    this.selectedTask = task;
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data =>{
      console.log (data)
      this.tasks = data;
    });
  } 
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log(data);
    });
    this.getTasksFromService();
    this.newTask = { title: "", description: "" };
  }

  editTasks(id){
    let observable = this._httpService.editTasks(id)
    observable.subscribe(data => {
      console.log(data)
      this.singleTask = data;
    });
  }

  edit(id){
    this._httpService.edit(id, this.singleTask).subscribe(data=>{
      console.log(data)
      // this.tasks = data;
      this.getTasksFromService()
    });
    this.selectedTask = {};
  }

  delete(id){
    let observable = this._httpService.delete(id)
    observable.subscribe(data =>{
      console.log(data)
      this.getTasksFromService();
      this.selectedTask = data;
    })
    this.selectedTask = {};
  }
}