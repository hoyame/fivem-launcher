import React from 'react';

import styles from './PageInfo.scss'

interface IPageInfo {
  titlePage: string;
}

const PageInfo : React.FC<IPageInfo> = (props: IPageInfo) => {
 return (
    <React.Fragment>
      <div className={styles['page-info']}>
        <p className={styles['page-name']}>{props.titlePage}</p>
      </div>
    </React.Fragment>
 );

}

export default PageInfo;
