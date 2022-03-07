import React, { useState } from 'react';

import { Input, Option } from '../../components/atoms';

import { Header, PriorityPicker } from '../../components/molecules';

import { TaskForm, Tasks } from '../../components/organisms';

import styles from './main.module.scss';


const Main: React.FC = () => {

  const [formsVisible, setFormsVisible] = useState<boolean>(false);

  function toggleFormsVisible(): void {
    setFormsVisible(!formsVisible);
  }


  return (

    <div className={styles['container']}>

      <div className={styles['tasks_container']}>
        <Header onAdd={toggleFormsVisible}/>

        <TaskForm visible={formsVisible} />

        <Tasks />

      </div>

    </div>

  );
}

export default Main;