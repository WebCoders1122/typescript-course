import Entry from "./Entry";

interface EntryListType {
  entryList: Entry[];
  saveLocal(): void;
  loadLocal(): void;
  addListItem(newEntry: Entry): void;
  removeItem(id: string): void;
  clearList(): void;
}

export default class EntryList implements EntryListType {
  static entryListInstance = new EntryList();
  static LOCAL_KEY = "MyListItemsForTSLesson11";
  constructor(public _entryList: Entry[] = []) {}
  get entryList(): Entry[] {
    return this._entryList;
  }
  saveLocal(): void {
    localStorage.setItem(EntryList.LOCAL_KEY, JSON.stringify(this._entryList));
  }
  loadLocal(): void {
    const localStorageList: string | null = localStorage.getItem(
      EntryList.LOCAL_KEY
    );
    if (localStorageList === null || localStorageList === "") return;
    const parsedList: { _id: string; _title: string; _completed: boolean }[] =
      JSON.parse(localStorageList);
    parsedList.map((item) => {
      const listItem = new Entry(item._id, item._title, item._completed);
      EntryList.entryListInstance.addListItem(listItem);
    });
  }
  clearList(): void {
    this._entryList = [];
    this.saveLocal();
  }
  addListItem(newEntry: Entry): void {
    this._entryList.push(newEntry);
    this.saveLocal();
  }
  removeItem(id: string): void {
    this._entryList = this._entryList.filter((item) => item._id !== id);
    console.log(this._entryList);
    this.saveLocal();
  }
}
