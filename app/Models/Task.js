import { generateId } from "../Utils/GenerateID.js"

export default class Task{
  constructor({title, listID, id, isChecked}){
      this.title = title,
      this.id = id || generateId(),
      this.listID = listID,
      this.isChecked = isChecked || false
  }

  get Template(){
    let checkStr = "";
    if (this.isChecked)
    {
      checkStr = `checked="true"`;
    }

    return /*html*/`
    <div class="col-12">
    <h5>
    <input type="checkbox" id="${this.id}" ${checkStr} onchange="app.taskController.checkChanged(this, '${this.id}')">
      <span class="text-center">${this.title}</span>
    <i class="fa fa-trash text-danger cursor-pointer rAlign" onclick="app.taskController.delete('${this.id}')" aria-hidden="true"></i>
    </h5>
    </div>
    `
  }

   get IsChecked(){
    let cbTask = document.getElementById(this.id);

    
    if (cbTask)
    {
      // @ts-ignore
      if (cbTask.checked){
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  
  }

}