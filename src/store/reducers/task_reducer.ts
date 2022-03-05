import { TaskActionsTypes } from "../actions/task_actions_types";

import { TaskState } from "./task_reducer_interface";


const initialState: TaskState = {
    tasks: [],
}

const TaskReducer = (state: TaskState = initialState, action: { type: string, payload: any }): TaskState => {

    switch (action.type) {

        case TaskActionsTypes.ADD_TASK:
            return { ...state, tasks: state.tasks.concat(action.payload) }


        case TaskActionsTypes.EDIT_TASK:
            var tasks = state.tasks;

            tasks.map((t) => {
                if (t.id === action.payload.id) return action.payload;
            })

            return { ...state, tasks: tasks }


        case TaskActionsTypes.DELETE_TASK:
            tasks = state.tasks;

            tasks.filter((t) => t.id !== action.payload)

            return { ...state, tasks: tasks }

        default:
            return state;
    }
}

export default TaskReducer;