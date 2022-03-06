import React, { useState } from 'react';

import { Detail, Option } from '../../atoms';

import colors from '../../../theme/colors.module.scss';

import styles from './priority_picker.module.scss';


const PriorityPicker: React.FC = () => {

    const [selectedOption, setSelectedOption] = useState<string>();


    return (
        <div className={styles['container']}>
            <Detail>Priority</Detail>

            <Option
                color={colors['low_priority']}
                selected={selectedOption === 'low'}
                value='low'
                onClick={setSelectedOption}
            >
                LOW
            </Option>

            <Option
                color={colors['normal_priority']}
                selected={selectedOption === 'normal'}
                value='normal'
                onClick={setSelectedOption}
            >
                NORMAL
            </Option>

            <Option
                color={colors['high_priority']}
                selected={selectedOption === 'high'}
                value='high'
                onClick={setSelectedOption}
            >
                HIGH
            </Option>
        </div>
    );
}

export default PriorityPicker;