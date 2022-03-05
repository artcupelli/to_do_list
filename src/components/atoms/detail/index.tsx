import React from 'react';

import DetailProps from './detail.props';

import styles from './detail.module.scss';


const Detail: React.FC<DetailProps> = ({ children }) => {

  return <h5 className={styles['detail']}>{children}</h5>

}

export default Detail;