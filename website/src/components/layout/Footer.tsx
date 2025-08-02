import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(['navigation', 'common']);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {t('navigation:professorName')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 2 }}>
              {t('common:footerDescription')}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {t('navigation:quickLinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" underline="hover">
                {t('navigation:about')}
              </Link>
              <Link href="/students" color="inherit" underline="hover">
                {t('navigation:students')}
              </Link>
              <Link href="/achievements" color="inherit" underline="hover">
                {t('navigation:achievements')}
              </Link>
              <Link href="/accountability" color="inherit" underline="hover">
                {t('navigation:accountability')}
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {t('navigation:contact')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              {t('common:academicLegacy')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              {t('common:inspireGenerations')}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'grey.600' }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {new Date().getFullYear()} {t('navigation:professorName')}. {t('common:allRightsReserved')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400', mt: 1 }}>
            {t('common:academicExcellence')} | {t('common:studentSuccess')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
