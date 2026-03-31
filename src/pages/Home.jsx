import { useApp } from '../context/AppContext';
import styles from './Home.module.css';

export default function Home() {
  const { setCurrentPage } = useApp();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>A platform for artists &amp; craftsmen</p>
          <h1 className={styles.headline}>
            Rescued materials,<br />
            <span className={styles.accent}>reimagined creations.</span>
          </h1>
          <p className={styles.sub}>
            From Scratch connects fine artists and textile craftsmen with surplus, offcut, and
            rescued materials — reducing waste one exchange at a time. Every connection is
            facilitated by <strong>Small Action</strong>, our trusted independent broker.
          </p>
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={() => setCurrentPage('browse')}>
              Browse materials
            </button>
            <button className={styles.ctaSecondary} onClick={() => setCurrentPage('offer')}>
              Share your surplus
            </button>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.shape1} />
          <div className={styles.shape2} />
          <div className={styles.shape3} />
          <span className={styles.heroMark}>✦</span>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2 className={styles.sectionHeading}>How it works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>📦</div>
            <h3>List or browse</h3>
            <p>
              Artists and craftsmen list surplus materials they want to share, or post what they're
              looking for.
            </p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>✦</div>
            <h3>Small Action connects</h3>
            <p>
              Our independent broker, Small Action, reviews your message and facilitates the
              introduction between both parties.
            </p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>🎨</div>
            <h3>Make something</h3>
            <p>
              Rescued materials find a new life in the hands of artists and craftsmen who can use
              them best.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.difference}>
        <h2 className={styles.sectionHeading}>Why From Scratch?</h2>
        <div className={styles.differenceGrid}>
          <div className={styles.differenceCard}>
            <h3>Not a marketplace</h3>
            <p>
              We're not about selling. From Scratch is about community, craft, and keeping useful
              materials out of the waste stream.
            </p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Built for artists</h3>
            <p>
              Designed specifically for fine artists, weavers, textile workers, and craftspeople who
              work with physical, rescued materials.
            </p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Brokered with care</h3>
            <p>
              Small Action ensures every connection is thoughtful and respectful — no spam, no
              pressure, just intentional exchange.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to start?</h2>
        <p>Browse what's available or share what you have.</p>
        <div className={styles.ctas}>
          <button className={styles.ctaPrimary} onClick={() => setCurrentPage('browse')}>
            Browse materials
          </button>
          <button className={styles.ctaSecondary} onClick={() => setCurrentPage('request')}>
            Post a request
          </button>
        </div>
      </section>
    </div>
  );
}
