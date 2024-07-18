import Entry from "../model/Entry";
import EntryList from "../model/EntryList";
import ListItem from "../model/ListItem";

interface templateType {
  ul: HTMLUListElement;
  render(entryList: Entry[]): void;
  clear(): void;
}

export default class Template implements templateType {
  static templateInstance = new Template();
  ul: HTMLUListElement;
  constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  render(entryList: Entry[]): void {
    const entryListClass = EntryList.entryListInstance;
    this.clear();
    entryList.map((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const input = document.createElement("input") as HTMLInputElement;
      input.type = "checkbox";
      input.id = item._id;
      input.checked = item._completed;
      li.append(input);
      input.addEventListener("change", () => {
        item._completed = !item._completed;
        entryListClass.saveLocal();
      });

      const lable = document.createElement("label") as HTMLLabelElement;
      lable.setAttribute("for", item._id);
      lable.innerText = item._title;
      li.append(lable);

      const button = document.createElement("button") as HTMLButtonElement;
      button.innerText = "X";
      button.className = "button";
      li.append(button);
      button.addEventListener("click", () => {
        entryListClass.removeItem(item._id);
        this.render(entryListClass._entryList);
      });
      li.append(button);
      this.ul.append(li);
    });
  }
  clear(): void {
    this.ul.innerHTML = "";
  }
}

// <li class="item">
//                     <input type="checkbox" id="1">
//                     <label for="1">eat</label>
//                     <button class="button">X</button>
//                 </li>
