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
              Professor S. Govindasamy
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 2 }}>
              Celebrating the legacy of a distinguished educator and mentor who guided 50+ PhD students to success worldwide.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link href="/students" color="inherit" underline="hover">
                Alumni
              </Link>
              <Link href="/achievements" color="inherit" underline="hover">
                Achievements
              </Link>
              <Link href="/accountability" color="inherit" underline="hover">
                Endowment Fund
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300', mb: 1 }}>
              Academic Legacy
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              Inspiring Future Generations
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, backgroundColor: 'grey.600' }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {new Date().getFullYear()} Professor S. Govindasamy. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400', mt: 1 }}>
            Academic Excellence | Student Success
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
