import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider
} from '@mui/material';
const Footer: React.FC = () => {

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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {/* About Section */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {t('navigation:professorName')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 2 }}>
              {t('common:footerDescription')}
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
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
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {t('navigation:contact')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              {t('common:academicLegacy')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              {t('common:inspireGenerations')}
            </Typography>
          </Box>
        </Box>

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
