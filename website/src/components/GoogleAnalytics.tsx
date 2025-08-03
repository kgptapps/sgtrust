import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const path = location.pathname + location.search;
    
    // Get page title based on route
    const getPageTitle = (pathname: string) => {
      const routes: { [key: string]: string } = {
        '/': 'Home - Professor S. Govindasamy',
        '/about': 'About - Professor S. Govindasamy',
        '/timeline': 'Timeline - Professor S. Govindasamy',
        '/students': 'Community Impact - Professor S. Govindasamy',
        '/gallery': 'Gallery - Professor S. Govindasamy',
        '/achievements': 'Achievements - Professor S. Govindasamy',
        '/accountability': 'Accountability - Professor S. Govindasamy',
        '/contact': 'Contact - Professor S. Govindasamy'
      };
      
      return routes[pathname] || 'Professor S. Govindasamy - Academic Legacy';
    };

    const title = getPageTitle(location.pathname);
    trackPageView(path, title);
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
