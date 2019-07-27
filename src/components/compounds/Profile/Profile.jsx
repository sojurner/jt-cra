import React from 'react';

import ProfileTab from '../../molecules/ProfileTab';
import Buffer from '../../wrappers/Buffer';
import Cards from '../../compounds/Cards';
import styles from '../../../styles/components/compounds/Profile.module.scss';

const imgUrl =
  'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081';

const list = [
  {
    imgUrl:
      'https://us.123rf.com/450wm/vectorplus/vectorplus1606/vectorplus160600510/58663755-dumbbell-vector-icon-white-illustration-isolated-on-black-background-for-graphic-and-web-design-.jpg?ver=6',
    title: 'About',
    to: '/about'
  },
  {
    imgUrl: 'https://www.bosterbio.com/media/images/MB_TRC_bg.jpg',
    title: 'Work',
    to: '/projects'
  },
  {
    imgUrl,
    title: 'Timeline',
    to: '/contact'
  }
];

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
      <Buffer>
        <Cards list={list} />
      </Buffer>
    </div>
  );
};

export default Profile;
