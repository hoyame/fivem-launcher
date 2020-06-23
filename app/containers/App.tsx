import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.png';

import Navbar from '../components/navbar/Navbar';
import styles from './App.scss';

import SFUIDisplayBold from '../assets/fonts/SF-UI-Display-Bold.ttf';
import SFUIDisplayLight from '../assets/fonts/SF-UI-Display-Light.ttf';
import SFUIDisplayMedium from '../assets/fonts/SF-UI-Display-Medium.woff';
import SFUIDisplayRegular from '../assets/fonts/SF-UI-Display-Regular.ttf';
import SFUIDisplaySemibold from '../assets/fonts/SF-UI-Display-Semibold.ttf';
import SFUITextRegular from '../assets/fonts/SF-UI-Text-Regular.ttf';
import SFUITextSemibold from '../assets/fonts/SF-UI-Text-Semibold.ttf';
import SFUIDisplayBlack from '../assets/fonts/SF-UI-Display-Black.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFUIDisplayLight';
    src: url(${SFUIDisplayLight});
  };
  @font-face {
    font-family: 'SFUIDisplayBold';
    src: url(${SFUIDisplayBold});
  };
  @font-face {
    font-family: 'SFUIDisplayMedium';
    src: url(${SFUIDisplayMedium});
  };
  @font-face {
    font-family: 'SFUIDisplayRegular';
    src: url(${SFUIDisplayRegular});
  };
  @font-face {
    font-family: 'SFUIDisplaySemibold';
    src: url(${SFUIDisplaySemibold});
  };
  @font-face {
    font-family: 'SFUITextRegular';
    src: url(${SFUITextRegular});
  };
  @font-face {
    font-family: 'SFUITextSemibold';
    src: url(${SFUITextSemibold});
  };
  @font-face {
    font-family: 'SFUIDisplayBlack';
    src: url(${SFUIDisplayBlack});
  };
`;

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  const { children } = props;
  return (
    <React.Fragment>
      <GlobalStyle />
      <div
        className={styles['app-container']}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={styles['page-container']}>{children}</div>
        <Navbar />
      </div>
    </React.Fragment>
  );
}
