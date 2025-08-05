import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeSelector from '../ThemeSelector';
import { trackNavigation, trackLanguageToggle, trackMobileMenuInteraction } from '../../utils/analytics';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation(['navigation', 'common']);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    const action = mobileOpen ? 'menu_close' : 'menu_open';
    trackMobileMenuInteraction(action);
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (language: string) => {
    trackLanguageToggle(language);
    i18n.changeLanguage(language);
  };

  const navigationItems = [
    { key: 'home', path: '/', label: t('navigation:home') },
    { key: 'about', path: '/about', label: t('navigation:about') },
    { key: 'timeline', path: '/timeline', label: t('navigation:timeline') },
    { key: 'achievements', path: '/achievements', label: t('navigation:achievements') },
    { key: 'publications', path: '/publications', label: t('navigation:publications') },
    { key: 'research-projects', path: '/research-projects', label: t('navigation:researchProjects') },
    { key: 'articles', path: '/articles', label: t('navigation:articles') },
    { key: 'gallery', path: '/gallery', label: t('navigation:gallery') },
    { key: 'students', path: '/students', label: t('navigation:students') },
    { key: 'endowment-fund', path: '/accountability', label: t('navigation:endowmentFund') },
    { key: 'sgtrust', path: '/sgtrust', label: t('navigation:sgtrust') },
    { key: 'acknowledgements', path: '/acknowledgements', label: t('navigation:acknowledgements') },
    { key: 'contact', path: '/contact', label: t('navigation:contact') }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>
          {t('navigation:menu')}
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.key}
            component={Link}
            to={item.path}
            onClick={() => {
              trackNavigation(item.path);
              trackMobileMenuInteraction('menu_navigation');
              handleDrawerToggle();
            }}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              backgroundColor: location.pathname === item.path ? 'primary.light' : 'transparent',
              '&:hover': {
                backgroundColor: 'primary.light'
              }
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Theme
          </Typography>
          <ThemeSelector />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant={i18n.language === 'en' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleLanguageChange('en')}
            sx={{ flex: 1, fontSize: '0.75rem' }}
          >
            English
          </Button>
          <Button
            variant={i18n.language === 'ta' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleLanguageChange('ta')}
            sx={{ flex: 1, fontSize: '0.75rem' }}
          >
            தமிழ்
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'text.primary' }}>
        <Toolbar>
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo/Title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: isMobile ? 1 : 0,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 600,
              mr: 4
            }}
          >
            {t('navigation:professorName')}
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  onClick={() => trackNavigation(item.path)}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Theme Selector & Language Buttons */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ThemeSelector />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LanguageIcon sx={{ color: 'text.secondary', mr: 1 }} />
                <Button
                  variant={i18n.language === 'en' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => handleLanguageChange('en')}
                  sx={{ minWidth: '60px', fontSize: '0.75rem' }}
                >
                  English
                </Button>
                <Button
                  variant={i18n.language === 'ta' ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => handleLanguageChange('ta')}
                  sx={{ minWidth: '60px', fontSize: '0.75rem' }}
                >
                  தமிழ்
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
