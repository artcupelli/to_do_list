import React from 'react';

import { IconButton, Title } from '../../components/atoms';

import Icons from '../../theme/icons';

import styles from './main.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <Title>Main Screen</Title>

      <IconButton path={Icons.options} />

    </div>

  );
}

export default Main;