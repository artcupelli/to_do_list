import React, { useState } from 'react';

import { Header } from '../../components/molecules';

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

        <TaskForm visible={formsVisible} />

        <Header onAdd={toggleFormsVisible}/>

        <Tasks />

      </div>

    </div>

  );
}

export default Main;