import React from 'react';

import ProfileTab from '../../molecules/ProfileTab';

import styles from '../../../styles/components/compounds/Profile.module.scss';

const Profile = ({ className }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  return (
    <div className={styles[className]}>
      <div
        className={styles[className].abs}
        style={{
          height: 175,
          width: '100%',
          background: 'linear-gradient(0.25turn, #3f87a6, #00446f, #3f87a6)',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0
        }}
      />
      <ProfileTab mounted={mounted} styles={styles} />
    </div>
  );
};

export default Profile;
