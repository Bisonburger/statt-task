import { ADD_TASK, UPDATE_TASK, DELETE_TASK, LIST_TASKS } from "./actionTypes";


export const addTask = content => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    ...content
  }
});