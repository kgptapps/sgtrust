
// Build trigger: 2025-08-05
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import GoogleAnalytics from './components/GoogleAnalytics';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimelinePage from './pages/TimelinePage';
import AlumniPage from './pages/AlumniPage';
import GalleryPage from './pages/GalleryPage';
import AchievementsPage from './pages/AchievementsPage';
import AccountabilityPage from './pages/AccountabilityPage';
import SGTrustPage from './pages/SGTrustPage';
import AcknowledgementsPage from './pages/AcknowledgementsPage';


function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/students" element={<AlumniPage />} />
              <Route path="/accountability" element={<AccountabilityPage />} />
              <Route path="/sgtrust" element={<SGTrustPage />} />
              <Route path="/acknowledgements" element={<AcknowledgementsPage />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
