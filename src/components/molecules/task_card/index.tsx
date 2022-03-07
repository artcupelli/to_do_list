import moment from 'moment';

import React from 'react';

import Icons from '../../../theme/icons';

import { Detail, IconButton, Subtitle } from '../../atoms';

import styles from './task_card.module.scss';

import TaskCardProps from './task_card.props';

import { useDispatch } from 'react-redux';

import { deleteTask } from '../../../store/actions/task_actions';



const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    const dispatch = useDispatch();


    function formatDate(): string {
        const formatedDate = moment(task.date).format("DD / MM / YYYY")

        return formatedDate;
    }

    function deleteThisTask(): void {        
        dispatch(deleteTask(task.id));        
    }


    return (
        <div className={styles['container']} key={task.id}>

            <div className={styles['left_container']} >
                <Subtitle>{task.title}</Subtitle>
            </div>


            <div className={styles['right_container']}>
                <div>
                    <div className={styles['options_container']}>
                        <IconButton path={Icons.delete} onClick={deleteThisTask} />
                        <IconButton path={Icons.pencil} />
                    </div>

                    <div className={styles[task.priority]} />
                </div>

                <Detail>{formatDate()}</Detail>
            </div>

        </div>
    );

}

export default TaskCard;