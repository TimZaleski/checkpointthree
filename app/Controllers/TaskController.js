import {taskService} from "../Services/TaskService.js"
import { ProxyState } from "../AppState.js"

function _draw(){
  let template = "";
  ProxyState.lists.forEach(p => template += p.Template)
  document.getElementById("mainLists").innerHTML = template
}

export default class TaskController{
  constructor(){
    ProxyState.on("tasks", _draw);
    _draw();
  }

  createTask(listID){
    window.event.preventDefault()
    let form = window.event.target
    let task = {
      // @ts-ignore
      title: form.taskTitle.value,
      listID: listID
    }
    if (task.title.length > 0)
      {
        taskService.createTask(task);
        
        // @ts-ignore
        form.reset()
      }
  }

  delete(taskID){
    if(window.confirm("Delete task?"))
    {
      taskService.delete(taskID);
    }
  }

  checkChanged(cb, id) {
    taskService.checkChanged(cb,id);
    _draw();
  }
}