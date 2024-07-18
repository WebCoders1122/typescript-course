export interface newEntry {
  id: string;
  title: string;
  completed?: boolean;
}

export default class Entry implements newEntry {
  constructor(
    public _id: string,
    public _title: string,
    public _completed: boolean = false
  ) {}
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this._id = id;
  }
  get title(): string {
    return this.title;
  }
  set title(title: string) {
    this._title = title;
  }
  get completed(): boolean {
    return this.completed;
  }
  set completed(completed: boolean) {
    this._completed = completed;
  }
}
