import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './SkeletonCard.module.scss';

const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 155 265"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ margin: 'auto' }}
    >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
      <rect x="0" y="107" rx="5" ry="5" width="150" height="15" />
      <rect x="0" y="126" rx="5" ry="5" width="93" height="15" />
      <rect x="1" y="163" rx="5" ry="5" width="80" height="24" />
      <rect x="124" y="155" rx="10" ry="10" width="32" height="32" />
    </ContentLoader>
  </div>
);

export default SkeletonCard;
