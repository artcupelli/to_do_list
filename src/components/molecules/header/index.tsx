import React from 'react';

import {  Title } from '../../atoms';

import styles from './header.module.scss';

import HeaderProps from './header.props';


const Header: React.FC<HeaderProps> = ({ onAdd }) => {

    return (
        <div className={styles['container']}>
            <Title>Tasks</Title>
        </div>
    );
}

export default Header;