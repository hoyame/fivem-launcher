import React from 'react';
import styles from './AppButtonI.scss';

interface AppButtonProps {
  text: string;
  onClick: () => void;
}

const AppButtonI: React.FC<AppButtonProps> = props => {
  return (
    <button onClick={props.onClick} className={styles['app-buttoni']}>
      {props.text}
    </button>
  );
};

export default AppButtonI;
