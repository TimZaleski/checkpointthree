import { ProxyState } from "../AppState.js"
import {listService} from "../Services/ListService.js"

function _draw(){
  let template = "";
  ProxyState.lists.forEach(p => template += p.Template)
  document.getElementById("mainLists").innerHTML = template
}

export default class ListController{
  constructor(){
    ProxyState.on("lists", _draw);
    _draw();
  }

  createList(){
    window.event.preventDefault();
    let form = window.event.target;
    
      // @ts-ignore
      let title = form.title.value;
      // @ts-ignore
      let color = form.color.value;
      if (title.length > 0)
      {
        listService.createList(title, color);
        // @ts-ignore
        form.reset();
      }
   
  }

  deleteList(id){
    if(window.confirm("Delete list?"))
    {
      listService.deleteList(id);
    }
    
  }
}