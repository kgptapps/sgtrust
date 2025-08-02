import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import academicTheme from './theme';
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
import AccountabilityPage from './pages/AccountabilityPage';
import ContactPage from './pages/ContactPage';

function App() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <ThemeProvider theme={academicTheme}>
      <CssBaseline />
      <Router basename="/sgtrust">
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
