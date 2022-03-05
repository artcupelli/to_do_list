import React from 'react';

import InputProps from './input.props';

import styles from './input.module.scss';


const Input: React.FC<InputProps> = ({ onChangeText, placeholder }) => {

    return (
        <input
            type='text'
            className={styles['input']}
            onChange={(e) => onChangeText(e.target.value)}
            placeholder={placeholder}
        />
    );
}

export default Input;