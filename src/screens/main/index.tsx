import React from 'react';

import { Input, Option } from '../../components/atoms';

import { Header, PriorityPicker } from '../../components/molecules';

import { Tasks } from '../../components/organisms';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <div className={styles['tasks_container']}>
        <Header />

        <Tasks />

        <Input placeholder='Título' onChangeText={() => { }} />

        <PriorityPicker />
      </div>

    </div>

  );
}

export default Main;