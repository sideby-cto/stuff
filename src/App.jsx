import { useApp } from './context/AppContext';
import Nav from './components/Nav';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import Browse from './pages/Browse';
import OfferMaterial from './pages/OfferMaterial';
import RequestMaterial from './pages/RequestMaterial';
import About from './pages/About';
import styles from './App.module.css';

function PageRouter() {
  const { currentPage } = useApp();
  switch (currentPage) {
    case 'home':      return <Home />;
    case 'browse':    return <Browse />;
    case 'offer':     return <OfferMaterial />;
    case 'request':   return <RequestMaterial />;
    case 'about':     return <About />;
    default:          return <Home />;
  }
}

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <main className={styles.main}>
        <PageRouter />
      </main>
      <ContactModal />
      <footer className={styles.footer}>
        <p>
          From Scratch — connecting artists &amp; craftsmen with rescued materials.
          Facilitated by <strong>Small Action</strong>.
        </p>
      </footer>
    </div>
  );
}
