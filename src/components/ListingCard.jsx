import { useApp } from '../context/AppContext';
import styles from './ListingCard.module.css';

export default function ListingCard({ listing }) {
  const { openContact } = useApp();

  return (
    <article className={`${styles.card} ${styles[listing.type]}`}>
      <div className={styles.stripe} />
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`${styles.badge} ${styles[`badge_${listing.type}`]}`}>
            {listing.type === 'offer' ? '✦ Offering' : '◇ Seeking'}
          </span>
          <span className={styles.category}>{listing.category}</span>
        </div>
        <h3 className={styles.title}>{listing.title}</h3>
        <p className={styles.description}>{listing.description}</p>
        <dl className={styles.meta}>
          <dt>Quantity</dt>
          <dd>{listing.quantity}</dd>
          <dt>Location</dt>
          <dd>{listing.location}</dd>
        </dl>
        <div className={styles.tags}>
          {listing.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.postedBy}>by {listing.postedBy}</span>
        <button className={styles.contactBtn} onClick={() => openContact(listing)}>
          Connect via Small Action
        </button>
      </div>
    </article>
  );
}
