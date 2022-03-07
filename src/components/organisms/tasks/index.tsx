import React from 'react';

import { useSelector } from 'react-redux';

import { TaskState } from '../../../store/reducers/task_reducer_interface';

import { Detail } from '../../atoms';

import { TaskCard } from '../../molecules';


const Tasks: React.FC = () => {

    const state = useSelector((state: TaskState) => state);

    console.log(state);


    return (
        <div>
            {
                state.tasks.length > 0 ?
                    state.tasks.map((task) => {
                        return <TaskCard
                            key={task.id}
                            task={{
                                id: task.id,
                                done: task.done,
                                title: task.title,
                                date: task.date,
                                priority: task.priority
                            }}
                        />
                    })
                    :
                    <Detail>No tasks yet :c</Detail>
            }
        </div>
    );
}

export default Tasks;