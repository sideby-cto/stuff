/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { sampleListings } from '../data/sampleData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [listings, setListings] = useState(sampleListings);
  const [currentPage, setCurrentPage] = useState('home');
  const [contactModal, setContactModal] = useState(null); // { listing }

  function addListing(listing) {
    setListings((prev) => [
      { ...listing, id: Date.now(), date: new Date().toISOString().slice(0, 10) },
      ...prev,
    ]);
  }

  function openContact(listing) {
    setContactModal({ listing });
  }

  function closeContact() {
    setContactModal(null);
  }

  return (
    <AppContext.Provider
      value={{ listings, addListing, currentPage, setCurrentPage, contactModal, openContact, closeContact }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
