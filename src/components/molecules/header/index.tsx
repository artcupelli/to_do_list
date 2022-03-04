import React from 'react';

import Icons from '../../../theme/icons';

import { IconButton, Title } from '../../atoms';

import styles from './header.module.scss';


const Header: React.FC = () => {
    
    return (
        <div className={styles['container']}>
            <Title>Tarefas</Title>

            <IconButton path={Icons.plus} color="#000" size={1.5}/>
        </div>
    );
}

export default Header;