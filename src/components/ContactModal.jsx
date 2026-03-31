import { useState } from 'react';
import { useApp } from '../context/AppContext';
import styles from './ContactModal.module.css';

export default function ContactModal() {
  const { contactModal, closeContact } = useApp();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!contactModal) return null;
  const { listing } = contactModal;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  function handleClose() {
    setSent(false);
    setForm({ name: '', email: '', message: '' });
    closeContact();
  }

  return (
    <div className={styles.overlay} onClick={handleClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
          ✕
        </button>
        {sent ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✦</div>
            <h2>Message sent to Small Action!</h2>
            <p>
              Small Action will reach out to both parties and facilitate the exchange. You should hear
              back within 2 business days.
            </p>
            <button className={styles.doneBtn} onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className={styles.intro}>
              <span className={styles.broker}>Small Action — broker</span>
              <h2 className={styles.heading}>Connect about this listing</h2>
              <p className={styles.listingTitle}>"{listing.title}"</p>
              <p className={styles.note}>
                Small Action is an independent broker that facilitates exchanges between artists and
                craftsmen. They will review your message and connect you with the other party.
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.label}>
                Your name
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Maya Artist"
                  required
                />
              </label>
              <label className={styles.label}>
                Email address
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className={styles.label}>
                Message to Small Action
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell them a bit about yourself and why you're interested in this material…"
                  rows={4}
                  required
                />
              </label>
              <button className={styles.submitBtn} type="submit">
                Send to Small Action
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
