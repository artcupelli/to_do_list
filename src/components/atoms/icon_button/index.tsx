import React from 'react';

import IconButtonProps from './icon_button.props';

import { Icon } from '@mdi/react';

import styles from './icon_button.module.scss';


const IconButton: React.FC<IconButtonProps> = ({
    path,
    color = "#9D9D9D",
    size = 1,
    onClick = () => { }
}) => {

    return (
        <div className={styles['container']} onClick={() => onClick()}>
            <Icon
                path={path}
                size={size}
                color={color}
            />
        </div>
    );

}

export default IconButton;