import React from 'react';

import TitleProps from './title.props';

import styles from './title.module.scss';


const Title: React.FC<TitleProps> = ({ children }) => {

  return <h1 className={styles['title']}>{children}</h1>

}

export default Title;