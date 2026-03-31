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
        <h1 className={styles.heading}>Browse Materials</h1>
        <p className={styles.sub}>
          Explore available and needed materials from artists and craftsmen across the country.
        </p>
      </header>

      <div className={styles.filters}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search materials…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search materials"
        />
        <div className={styles.typeToggle} role="group" aria-label="Filter by type">
          {['all', 'offer', 'need'].map((t) => (
            <button
              key={t}
              className={`${styles.toggleBtn} ${typeFilter === t ? styles.toggleActive : ''}`}
              onClick={() => setTypeFilter(t)}
            >
              {t === 'all' ? 'All' : t === 'offer' ? '✦ Offerings' : '◇ Requests'}
            </button>
          ))}
        </div>
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
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>No listings match your search. Try adjusting the filters.</p>
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
