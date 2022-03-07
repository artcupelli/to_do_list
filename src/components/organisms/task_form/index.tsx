import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Task from '../../../models/task';

import { addTask, editTask } from '../../../store/actions/task_actions';

import { TaskState } from '../../../store/reducers/task_reducer_interface';

import Icons from '../../../theme/icons';

import { IconButton, Input } from '../../atoms';

import { PriorityPicker } from '../../molecules';

import styles from './task_form.module.scss';

import TaskFormProps from './task_form.props';


const TaskForm: React.FC<TaskFormProps> = ({ task, callback = () => { } }) => {

    const dispatch = useDispatch();
    const state = useSelector((state: TaskState) => state);

    const [title, setTitle] = useState<string>(task?.title ?? '');
    const [priority, setPriority] = useState<"low" | "normal" | "high">(task?.priority ?? "low");

    console.log(task);


    function submitTask(): void {
        if (title.length === 0) return;

        if (task?.id !== undefined) submitUpdateTask();

        else submitNewTask();

        callback()
    }

    function submitNewTask(): void {
        const newTask: Task = {
            id: state.tasks.length,
            date: new Date(),
            done: false,
            priority: priority,
            title: title
        };

        dispatch(addTask(newTask));

        clearFields();
    }

    function submitUpdateTask(): void {
        const newTask: Task = {
            id: task!.id,
            date: new Date(),
            done: false,
            priority: priority,
            title: title
        };

        console.log("ok");
        

        dispatch(editTask(newTask));
    }


    function clearFields(): void {
        setTitle("");
        setPriority("low");
    }


    return (
        <div className={styles['container']}  >

            <Input placeholder='Title' onChangeText={setTitle} value={title} />

            <div className={styles['bottom_container']}>
                <PriorityPicker selected={priority} setSelected={setPriority} />

                <IconButton path={Icons.plus} onClick={submitTask} />
            </div>

        </div>
    );
}

export default TaskForm;