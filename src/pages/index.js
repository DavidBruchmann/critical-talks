import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// 1. Define your array of anonymous, conflict-free background textures
const BACKGROUND_IMAGES = [
  'img/simon-infanger--_02VOYclsY-unsplash.jpg',
  'img/wd-toro-iW0BqCLVuLY-unsplash.jpg',
  'img/thomas-de-luze-l-p8mZ-6h2Y-unsplash.jpg',
  'img/daniel-bernard-s67PZz8Xt3c-unsplash.jpg'
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 2. Set the interval timer (e.g., 2500ms for a harsh, rhythmic cut)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === BACKGROUND_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  const resolvedUrl = `${BACKGROUND_IMAGES[currentImageIndex]}`;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Dissecting the Manufactured Constructs of Empathy, Memory, and Power.">
      <header
        className={styles.heroBanner}
        // 3. Dynamic inline style updates the source instantly with zero transition properties
        // style={{ backgroundImage: `url('${BACKGROUND_IMAGES[currentImageIndex]}')` }}
        style={{ backgroundImage: `url('${resolvedUrl}')` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/dossiers">
              Enter the Dossiers
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
