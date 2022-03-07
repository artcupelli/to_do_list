import { TaskAction } from "../actions/task_actions";

import { TaskActionsTypes } from "../actions/task_actions_types";

import { TaskState } from "./task_reducer_interface";


const initialState: TaskState = {
    tasks: [],
}

const TaskReducer = (state: TaskState = initialState, action: TaskAction): TaskState => {

    switch (action.type) {


        case TaskActionsTypes.ADD_TASK:

            return { tasks: state.tasks.concat(action.payload) }


        case TaskActionsTypes.EDIT_TASK:

            return {
                tasks: state.tasks.map((t) => {
                    if (t.id === action.payload.id) return action.payload;
                    else return t;
                })
            }


        case TaskActionsTypes.DELETE_TASK:

            return { tasks: state.tasks.filter((t) => t.id !== action.payload) }


        default:
            return state;
    }
}

export default TaskReducer;