import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../../styles/components/atoms/Loading.module.scss';

const Loading = () => {
  const renderLoading = () => (
    <div className={styles.loadingOuter}>
      <div className={styles.loadingInner}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    renderLoading(),
    document.getElementById('root')
  );
};

export default Loading;
