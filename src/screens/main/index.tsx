import React from 'react';

import { Header } from '../../components/molecules';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Header />

    </div>

  );
}

export default Main;