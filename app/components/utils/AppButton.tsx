import React from 'react';
import styles from './AppButton.scss';

interface AppButtonProps {
  text: string;
  onClick: () => void;
}

const AppButton: React.FC<AppButtonProps> = props => {
  return (
    <button onClick={props.onClick} className={styles['app-button']}>
      {props.text}
    </button>
  );
};

export default AppButton;
