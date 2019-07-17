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
        style={{
          height: 187,
          width: '100%',
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1do2fiqX2jxZ-cSy3EWEPzIF0TRn3ziAL_rABTonJ6UszAt9S')`,
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          backgroundSize: 'cover',
          zIndex: -1,
          top: 0,
          left: 0
        }}
      />
      <ProfileTab mounted={mounted} styles={styles} />
      {/* <Cards list={} /> */}
    </div>
  );
};

export default Profile;
