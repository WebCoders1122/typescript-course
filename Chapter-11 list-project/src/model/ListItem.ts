export interface Item {
  id: string;
  title: string;
  completed: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _title: string = "",
    private _completed: boolean = false
  ) {}

  //to get values
  get id(): string {
    return this._id;
  }
  get title(): string {
    return this._title;
  }
  get completed(): boolean {
    return this._completed;
  }
  //to set values
  set id(id) {
    this._id = id;
  }
  set title(title) {
    this._title = title;
  }
  set completed(completed) {
    this._completed = completed;
  }
}
