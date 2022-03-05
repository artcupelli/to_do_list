import React from 'react';

import { Input, Option } from '../../components/atoms';

import { Header } from '../../components/molecules';

import { Tasks } from '../../components/organisms';

import styles from './main.module.scss';

import colors from '../../theme/colors.module.scss';


const Main: React.FC = () => {

  return (

    <div className={styles['container']}>

      <div className={styles['tasks_container']}>
        <Header />

        <Tasks />

        <Input placeholder='Título' onChangeText={() => { }} />

        <Option selected value='low' color={colors['low_priority']}>TESTE</Option>
      </div>

    </div>

  );
}

export default Main;