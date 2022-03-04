import React from 'react';

import { Title } from '../../components/atoms';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Title>Main Screen</Title>

    </div>

  );
}

export default Main;