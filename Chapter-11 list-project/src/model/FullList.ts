import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static LIST_KEY: string = "lkasdfjwjlsidadsfa";
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem(FullList.LIST_KEY);
    if (storedList === null || storedList === "") return;
    const parsedList: { _id: string; _title: string; _completed: boolean }[] =
      JSON.parse(storedList);
    parsedList.map((item) => {
      const itemObject = new ListItem(item._id, item._title, item._completed);
      FullList.instance.addItem(itemObject);
    });
  }
  save(): void {
    localStorage.setItem(FullList.LIST_KEY, JSON.stringify(this._list));
  }
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
}
