import React from 'react';

import SubtitleProps from './subtitle.props';

import styles from './subtitle.module.scss';


const Subtitle: React.FC<SubtitleProps> = ({ children }) => {

  return <h3 className={styles['subtitle']}>{children}</h3>

}

export default Subtitle;