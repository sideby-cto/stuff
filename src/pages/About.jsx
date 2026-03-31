import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>About From Scratch</h1>
      </header>

      <section className={styles.section}>
        <h2>Our mission</h2>
        <p>
          From Scratch is a community platform dedicated to reducing waste by connecting artists and
          craftsmen with rescued, surplus, and offcut materials. We believe that what one person
          considers waste can become another person's next creation.
        </p>
        <p>
          We focus specifically on the needs of <strong>fine artists</strong> and{' '}
          <strong>textile craftsmen</strong> — people who work with physical materials and have a
          deep appreciation for quality, texture, and provenance. Unlike general marketplaces, From
          Scratch is curated for craft.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Small Action — our broker</h2>
        <p>
          Every connection made through From Scratch is facilitated by{' '}
          <strong>Small Action</strong>, an independent broker dedicated to intentional exchange.
          Small Action reviews inquiries, introduces both parties, and helps coordinate logistics —
          ensuring that every exchange is respectful, purposeful, and fair.
        </p>
        <p>
          This isn't a direct marketplace. Small Action acts as an intermediary so that both the
          giver and the receiver have a thoughtful, supported experience.
        </p>
        <div className={styles.smallActionCard}>
          <span className={styles.mark}>✦</span>
          <div>
            <strong>Small Action</strong>
            <p>
              Independent broker for rescued material exchanges among artists and craftsmen.
              <br />
              Response time: within 2 business days.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Who is this for?</h2>
        <ul className={styles.list}>
          <li>Fine artists working with physical media (paint, canvas, mixed media)</li>
          <li>Textile workers, weavers, and fiber artists</li>
          <li>Fashion designers seeking sustainable materials</li>
          <li>Community art programs needing donated supplies</li>
          <li>Studios and workshops looking to responsibly redistribute surplus</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How it's different from Facebook Marketplace</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h3>From Scratch</h3>
            <ul>
              <li>Focused on rescued &amp; surplus materials</li>
              <li>Designed for fine artists &amp; craftsmen</li>
              <li>Facilitated by a dedicated broker</li>
              <li>Community of practice, not commerce</li>
              <li>Thoughtful, curated exchanges</li>
            </ul>
          </div>
          <div className={`${styles.comparisonCard} ${styles.secondary}`}>
            <h3>General marketplaces</h3>
            <ul>
              <li>All types of goods</li>
              <li>General audience</li>
              <li>Direct, often anonymous transactions</li>
              <li>Commerce-focused</li>
              <li>High volume, low curation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
