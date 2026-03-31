import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/sampleData';
import styles from './PostForm.module.css';

const emptyForm = {
  title: '',
  category: '',
  description: '',
  quantity: '',
  location: '',
  postedBy: '',
  tags: '',
};

export default function OfferMaterial() {
  const { addListing, setCurrentPage } = useApp();
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addListing({
      ...form,
      type: 'offer',
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successIconWrap}>✦</div>
        <h2>Your listing is live!</h2>
        <p>
          Your surplus materials have been posted. Artists and craftsmen can now discover them and
          reach out through Small Action.
        </p>
        <div className={styles.successBtns}>
          <button className={styles.ctaPrimary} onClick={() => setCurrentPage('browse')}>
            Browse all listings
          </button>
          <button className={styles.ctaSecondary} onClick={() => { setForm(emptyForm); setSubmitted(false); }}>
            Post another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Share your surplus</p>
        <h1 className={styles.heading}>Offer Materials</h1>
        <p className={styles.sub}>
          Have surplus, offcut, or rescued materials? List them here so artists and craftsmen can
          give them a new life.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Material title <span className={styles.req}>*</span>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Linen fabric remnants"
            required
          />
        </label>

        <label className={styles.label}>
          Category <span className={styles.req}>*</span>
          <select
            className={styles.select}
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Choose a category…</option>
            {categories.filter((c) => c !== 'All').map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label className={styles.label}>
          Description <span className={styles.req}>*</span>
          <textarea
            className={styles.textarea}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the material, condition, how it was rescued, etc."
            rows={4}
            required
          />
        </label>

        <div className={styles.row}>
          <label className={styles.label}>
            Quantity
            <input
              className={styles.input}
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. ~5 meters, 2 boxes"
            />
          </label>
          <label className={styles.label}>
            Location <span className={styles.req}>*</span>
            <input
              className={styles.input}
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City, State"
              required
            />
          </label>
        </div>

        <label className={styles.label}>
          Your name / studio <span className={styles.req}>*</span>
          <input
            className={styles.input}
            type="text"
            name="postedBy"
            value={form.postedBy}
            onChange={handleChange}
            placeholder="e.g. Margot Studio"
            required
          />
        </label>

        <label className={styles.label}>
          Tags <span className={styles.hint}>(comma-separated)</span>
          <input
            className={styles.input}
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="e.g. linen, natural fiber, fabric"
          />
        </label>

        <button className={styles.submitBtn} type="submit">
          Post offering →
        </button>
      </form>
    </div>
  );
}
