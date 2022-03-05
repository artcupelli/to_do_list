import Task from "../../components/models/task";

import { TaskActionsTypes } from "./task_actions_types";


export const addTask = (task: Task) => ({
    type: TaskActionsTypes.ADD_TASK,
    payload: task
});

export const editTask = (newTask : Task) => ({
    type: TaskActionsTypes.EDIT_TASK,
    payload: newTask
});

export const endTask = (taskId : number) => ({
    type: TaskActionsTypes.END_TASK,
    payload: taskId
});

export const deleteTask = (taskId : number) => ({
    type: TaskActionsTypes.DELETE_TASK,
    payload: taskId
});