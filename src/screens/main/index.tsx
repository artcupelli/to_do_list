import React from 'react';
import { Subtitle } from '../../components/atoms';

import { Header } from '../../components/molecules';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Header />

      <Subtitle>Teste</Subtitle>

    </div>

  );
}

export default Main;