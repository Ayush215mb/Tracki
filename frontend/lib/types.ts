export type Task = {
  id: string;
  name: string;
  description: string;
  points: number;
}

export enum TaskPoints {
  FIVE = 5,
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50,
}

export type Completion ={
  id:string;
  TaskId:String;
  date : number;
  month : number;
  completed: Boolean;
}

export type ErrorTyp={
  code: number;
  message: string;
  description: string;
}