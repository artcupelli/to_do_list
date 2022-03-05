import React from 'react';

import { Header } from '../../components/molecules';

import { Tasks } from '../../components/organisms';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <div className={styles['tasks_container']}>
        <Header />

        <Tasks />
      </div>

    </div>

  );
}

export default Main;