import React from 'react';

import { Detail, Option } from '../../atoms';

import colors from '../../../theme/colors.module.scss';

import styles from './priority_picker.module.scss';

import PriorityPickerProps from './priority_picker.props';


const PriorityPicker: React.FC<PriorityPickerProps> = ({ selected, setSelected }) => {


    return (
        <div className={styles['container']}>
            <Detail>Priority</Detail>

            <Option
                color={colors['low_priority']}
                selected={selected === 'low'}
                value='low'
                onClick={setSelected}
            >
                LOW
            </Option>

            <Option
                color={colors['normal_priority']}
                selected={selected === 'normal'}
                value='normal'
                onClick={setSelected}
            >
                NORMAL
            </Option>

            <Option
                color={colors['high_priority']}
                selected={selected === 'high'}
                value='high'
                onClick={setSelected}
            >
                HIGH
            </Option>
        </div>
    );
}

export default PriorityPicker;