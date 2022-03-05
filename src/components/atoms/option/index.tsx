import React from 'react';

import styles from './option.module.scss';

import OptionProps from './option.props';



const Option: React.FC<OptionProps> = ({
    selected,
    children,
    value,
    color,
    onClick = () => { }
}) => {    

    return (
        <div
            className={styles[selected ? 'selected_container' : 'container']}
            onClick={() => onClick(value)}
            style={{borderColor: color}}
        >
            <span style={{color: color}}>{children}</span>
        </div>
    );
}

export default Option;