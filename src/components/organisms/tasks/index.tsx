import React from 'react';

import { TaskCard } from '../../molecules';


const Tasks: React.FC = () => {

    return (
        <div>
            <TaskCard
                task={{
                    id: 0,
                    done: false,
                    title: "Watch new documentary. ",
                    date: new Date('2022-03-04'),
                    priority: "normal"
                }}
            />
            <TaskCard
                task={{
                    id: 0,
                    done: false,
                    title: "Watch new documentary. ",
                    date: new Date('2022-03-04'),
                    priority: "normal"
                }}
            />
            <TaskCard
                task={{
                    id: 0,
                    done: false,
                    title: "Watch new documentary. Watch new documentary. Watch new documentary. Watch new documentary. Watch new documentary. Watch new documentary.Watch new documentary. Watch new documentary. Watch new documentary.  ",
                    date: new Date('2022-03-04'),
                    priority: "normal"
                }}
            />
        </div>
    );
}

export default Tasks;