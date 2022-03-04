import React from 'react';

import DetailProps from './detail.props';

import styles from './detail.module.scss';


const Detail: React.FC<DetailProps> = ({ children }) => {

  return <h4 className={styles['detail']}>{children}</h4>

}

export default Detail;