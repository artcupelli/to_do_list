import { createStore, Store } from "redux";

import { TaskAction } from "./actions/task_actions";

import TaskReducer from "./reducers/task_reducer";

import { TaskState } from "./reducers/task_reducer_interface";


const store :Store<TaskState, TaskAction> = createStore(TaskReducer);

export default store;