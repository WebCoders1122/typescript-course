import "./css/style.css";
import Entry from "./model/Entry";
import EntryList from "./model/EntryList";
import Template from "./templates/Template";

const initApp = (): void => {
  const entryList = EntryList.entryListInstance;
  const template = Template.templateInstance;
  const form = document.getElementById("itemEntryForm") as HTMLFormElement;
  form.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const inputText = input.value.trim();
    if (inputText === "") return;

    const inputID = entryList._entryList.length
      ? (
          +entryList._entryList[entryList._entryList.length - 1]._id + 1
        ).toString()
      : "1";
    const newEntryObj = new Entry(inputID, inputText);
    entryList.addListItem(newEntryObj);
    template.render(entryList._entryList);
  });

  //initial render
  entryList.loadLocal();
  template.render(entryList._entryList);
};

//initial startup
document.addEventListener("DOMContentLoaded", initApp);

// import "./css/style.css";
// import FullList from "./model/FullList";
// import ListItem from "./model/ListItem";
// import ListTemplate from "./templates/ListTemplate";

// const initApp = (): void => {
//   const fullList = FullList.instance;
//   const listTemplate = ListTemplate.instance;
//   // for adding new entry with form
//   const htmlFrom = document.getElementById(`itemEntryForm`) as HTMLFormElement;
//   htmlFrom.addEventListener("submit", (event: SubmitEvent): void => {
//     event.preventDefault();
//     const formInput = document.getElementById("newItem") as HTMLInputElement;
//     const formInputText = formInput.value.trim();
//     if (formInputText === "" || !formInputText.length) return;
//     const id: string = fullList.list.length
//       ? (fullList.list[fullList.list.length - 1].id + 1).toString()
//       : "1";
//     const newEntry = new ListItem(id, formInputText);
//     fullList.addItem(newEntry);
//     listTemplate.render(fullList);
//   });
//   //to clear complete list
//   const clearList = document.getElementById(
//     "clearItemsButton"
//   ) as HTMLButtonElement;
//   clearList.addEventListener("click", (): void => {
//     listTemplate.clear();
//     fullList.clearList();
//     listTemplate.render(fullList);
//   });

//   //for initially loading list
//   fullList.load();
//   //for initial render
//   listTemplate.render(fullList);
// };

// document.addEventListener("DOMContentLoaded", initApp);
