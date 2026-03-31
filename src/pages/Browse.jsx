import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/sampleData';
import ListingCard from '../components/ListingCard';
import styles from './Browse.module.css';

export default function Browse() {
  const { listings } = useApp();
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = listings.filter((l) => {
    const matchType = typeFilter === 'all' || l.type === typeFilter;
    const matchCat = categoryFilter === 'All' || l.category === categoryFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.tags.some((t) => t.toLowerCase().includes(q));
    return matchType && matchCat && matchSearch;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Discover rescued materials</p>
        <h1 className={styles.heading}>Browse Materials</h1>
        <p className={styles.sub}>
          Offerings and requests from artists and craftsmen across the country.
        </p>
      </header>

      <div className={styles.filters}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.search}
            type="search"
            placeholder="Search materials, tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search materials"
          />
        </div>
        <div className={styles.filterDivider} />
        <div className={styles.typeToggle} role="group" aria-label="Filter by type">
          {['all', 'offer', 'need'].map((t) => (
            <button
              key={t}
              className={`${styles.toggleBtn} ${typeFilter === t ? styles.toggleActive : ''}`}
              onClick={() => setTypeFilter(t)}
            >
              {t === 'all' ? 'All' : t === 'offer' ? '✦ Offering' : '◇ Seeking'}
            </button>
          ))}
        </div>
        <div className={styles.filterDivider} />
        <select
          className={styles.categorySelect}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className={styles.resultsMeta}>
          {filtered.length} listing{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🌿</div>
          <p>No listings match your search.</p>
          <p>Try adjusting the filters above.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
