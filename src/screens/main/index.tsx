import React from 'react';

import { Detail, Subtitle } from '../../components/atoms';

import { Header } from '../../components/molecules';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Header />

      <Subtitle>Teste</Subtitle>

      <Detail>Teste</Detail>

    </div>

  );
}

export default Main;