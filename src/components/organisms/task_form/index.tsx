import moment from 'moment';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Task from '../../../models/task';

import { addTask } from '../../../store/actions/task_actions';

import { TaskState } from '../../../store/reducers/task_reducer_interface';

import Icons from '../../../theme/icons';

import { IconButton, Input } from '../../atoms';

import { PriorityPicker } from '../../molecules';

import styles from './task_form.module.scss';

import TaskFormProps from './task_form.props';


const TaskForm: React.FC<TaskFormProps> = ({ }) => {

    const dispatch = useDispatch();
    const state = useSelector((state: TaskState) => state);

    const [title, setTitle] = useState<string>('');
    const [priority, setPriority] = useState<"low" | "normal" | "high">("low");


    function submitNewTask(): void {
        if (title.length === 0) return;

        const task: Task = {
            id: state.tasks.length,
            date: new Date(),
            done: false,
            priority: priority,
            title: title
        };

        dispatch(addTask(task));

        clearFields();
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

                <IconButton path={Icons.plus} onClick={submitNewTask} />
            </div>

        </div>
    );
}

export default TaskForm;