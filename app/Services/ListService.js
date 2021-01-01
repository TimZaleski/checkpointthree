import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateID.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

//Public
class ListService {

  constructor(){
    ProxyState.on("lists", saveState);

    }

  createList(title, color) {
    ProxyState.lists = [...ProxyState.lists, new List({ title: title, color: color, id: generateId() })]
  }

  deleteList(id)
  {
    ProxyState.lists = ProxyState.lists.filter(function(obj) {
      return obj.id !== id;
    });
  }
}

export const listService = new ListService()