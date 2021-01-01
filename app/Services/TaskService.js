import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskService{
  delete(taskID) {
    ProxyState.tasks = ProxyState.tasks.filter(t=> t.id != taskID);
  }
  createTask(task) {
    let tasks = ProxyState.tasks;
    let list = ProxyState.lists.filter(t=> t.listID === task.listID);

    tasks.push(new Task(task));
    ProxyState.tasks = tasks;
  }

  checkChanged(cb, id)
  {
    let task = ProxyState.tasks.filter(t=> t.id === id);
    if(task)
    {
      task[0].isChecked = cb.checked;
      saveState();
    }
  }
  constructor(){
  ProxyState.on("tasks", saveState);

  }
}

export const taskService = new TaskService()