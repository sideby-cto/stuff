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

export default function RequestMaterial() {
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
      type: 'need',
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successIconWrap}>◇</div>
        <h2>Your request is posted!</h2>
        <p>
          Your material request is now visible. If someone has what you need, Small Action will
          facilitate the connection.
        </p>
        <div className={styles.successBtns}>
          <button className={styles.ctaPrimary} onClick={() => setCurrentPage('browse')}>
            Browse all listings
          </button>
          <button className={styles.ctaSecondary} onClick={() => { setForm(emptyForm); setSubmitted(false); }}>
            Post another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Tell us what you need</p>
        <h1 className={styles.heading}>Request Materials</h1>
        <p className={styles.sub}>
          Looking for specific rescued materials for your practice? Post a request and let the
          community know what you need.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          What are you looking for? <span className={styles.req}>*</span>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Silk or satin fabric scraps"
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
            placeholder="Describe what you need, why, how it will be used, etc."
            rows={4}
            required
          />
        </label>

        <div className={styles.row}>
          <label className={styles.label}>
            Quantity needed
            <input
              className={styles.input}
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. Any amount, ~2 meters"
            />
          </label>
          <label className={styles.label}>
            Your location <span className={styles.req}>*</span>
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
            placeholder="e.g. Ariel Makes"
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
            placeholder="e.g. silk, satin, collage"
          />
        </label>

        <button className={styles.submitBtn} type="submit">
          Post request →
        </button>
      </form>
    </div>
  );
}
