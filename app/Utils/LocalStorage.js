import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


export function saveState(){
  localStorage.setItem("listData", JSON.stringify({lists: ProxyState.lists, tasks: ProxyState.tasks}))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("listData"))
  if(data){
   ProxyState.lists = data.lists.map(p => new List(p));
   ProxyState.tasks = data.tasks.map(p => new Task(p));
  }

}