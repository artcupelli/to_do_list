import React from 'react';

import { Header, TaskCard } from '../../components/molecules';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Header />

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

export default Main;