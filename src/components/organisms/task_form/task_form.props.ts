import Task from "../../../models/task";

export default interface TaskFormProps {
    visible: boolean,
    task?: Task,
    callback?: Function
}