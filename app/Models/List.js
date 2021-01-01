import { generateId } from "../Utils/GenerateID.js";
import { ProxyState } from "../AppState.js"

export default class List{
 constructor({title, color, id}){
  this.title = title;
  this.color = color;
  this.id = id || generateId();
 } 


 get Template(){
  return /*html*/`
  <div class="card col-3 m-4"> 
                <div class="card-body">
                <div style="background-color:${this.color}" class="m5">
                <div class="text-right"><i class="fa fa-times cursor-pointer rAlign" onclick="app.listController.deleteList('${this.id}')" aria-hidden="true"></i></div>
                <div class="text-center"><h4 class="card-title">${this.title}</h4></div>
                <div class="text-center"><h5 class="card-title">${this.Completed}</h5></div>
                </div>
                    <div class="row">
                    ${this.Tasks}
                    </div>
                </div>
                <form onsubmit="app.taskController.createTask('${this.id}')" >
                <div class="form-group row">
                    <div class="col-12">
                        <input type="text" class="form-control" name="taskTitle" aria-describedby="helpId" placeholder="Add Task...">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-success" type="submit">Create Task</button>
                    </div>
                </div>
            </form>
            </div>
  `
 }


 get Tasks(){
   let template = "";
   let tasks = ProxyState.tasks.filter(t=> t.listID == this.id);
   tasks.forEach(t=> template += t.Template);
   return template;
 }

 get Completed(){
    let template = "";
    let tasks = ProxyState.tasks.filter(t=> t.listID == this.id);
    let maxTasks = tasks.length;
    let completeTasks = 0;
    tasks.forEach(t=> completeTasks += t.isChecked);
    return `${completeTasks}/${maxTasks}`;
  }
}