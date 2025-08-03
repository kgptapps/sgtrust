
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './contexts/ThemeContext';
import GoogleAnalytics from './components/GoogleAnalytics';
import './i18n';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimelinePage from './pages/TimelinePage';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
import AchievementsPage from './pages/AchievementsPage';
import ArticlesPage from './pages/ArticlesPage';
import AccountabilityPage from './pages/AccountabilityPage';
import ContactPage from './pages/ContactPage';

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router basename="/sgtrust">
        <GoogleAnalytics />
        <div className={`min-h-screen flex flex-col ${currentLanguage === 'ta' ? 'lang-ta' : ''}`}>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/accountability" element={<AccountabilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
