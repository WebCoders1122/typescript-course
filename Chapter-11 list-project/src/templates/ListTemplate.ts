import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }
  render(fullList: FullList): void {
    this.clear(); // to avoid duplication
    fullList.list.map((listItem) => {
      let li: HTMLLIElement = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      //creating input
      let input = document.createElement("input") as HTMLInputElement;
      input.type = "checkbox";
      input.id = listItem.id;
      input.checked = listItem.completed;
      li.append(input);
      input.addEventListener("change", () => {
        listItem.completed = !listItem.completed;
        fullList.save();
      });

      //creaitng label
      let label = document.createElement("lable") as HTMLLabelElement;
      label.setAttribute("for", listItem.id);
      label.innerText = listItem.title;
      li.append(label);

      //creating button
      let button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.innerText = "X";
      button.addEventListener("click", () => {
        fullList.removeItem(listItem.id);
        this.render(fullList);
      });
      li.append(button);
      this.ul.append(li);
    });
  }
}

//                  <li class="item">
//                     <input type="checkbox" id="1">
//                     <label for="1">eat</label>
//                     <button class="button">X</button>
//                 </li>
