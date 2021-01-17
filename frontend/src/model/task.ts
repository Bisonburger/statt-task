export class Task {
  id!: string;
  summary!: string;
  detail!: string;
  due!: string;

  constructor( id: string, summary:string, detail: string, due: string ){
    if( id ) this.id = id;
    if( summary ) this.summary = summary;
    if( detail ) this.detail = detail;
    if( due ) this.due = due;      
  }
}

export type CreateTaskDto = Omit<Task, 'id'>;

export type UpdateTaskDto = Partial<Omit<Task, 'id'>>;

