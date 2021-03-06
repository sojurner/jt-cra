import React from 'react';

const ProfileTab = ({ mounted, styles }) => {
  return (
    <section className={styles.container}>
      <img
        className={styles.img1}
        src="https://media.licdn.com/dms/image/C5603AQHtBUQmDP1_6Q/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=hnUWIEBo-kLVK7qBsNW1kd225zvJyf_SpcMilyZ84CY"
        alt="john tan profile"
      />
      <div className={styles.section1}>
        <div
          className={mounted ? styles['section1-1'] : styles['section1-1_hide']}
        >
          <h3>Data Scientist | Clinical Research</h3>
          <h4>Biostatistics</h4>
        </div>
        <img
          className={styles.img2}
          src="http://logodesignfx.com/wp-content/uploads/2019/04/mychart-logo-.png"
          alt="loma linda emblem"
        />
      </div>
    </section>
  );
};
export default ProfileTab;
