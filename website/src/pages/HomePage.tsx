import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Avatar
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { t } = useTranslation(['content', 'navigation']);



  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #D7CCC8 0%, #BCAAA4 50%, #A1887F 100%)',
          color: '#3E2723',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" component="h1" gutterBottom>
                {t('content:welcomeTitle')}
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                Community Educator & Philanthropist
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', opacity: 0.8 }}>
                Celebrating the remarkable journey of an educator who dedicated his life to helping people from all walks of life through education, community service, and philanthropic endeavors.
              </Typography>

              {/* Memorial and Statue Commemoration */}
              <Box sx={{
                mb: 4,
                p: 3,
                backgroundColor: 'rgba(93, 64, 55, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(93, 64, 55, 0.2)'
              }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500, mb: 1 }}>
                  🕊️ In Loving Memory of Professor S. Govindasamy (1945-2009)
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  A commemorative statue was constructed in 2025 in his memory to celebrate
                  his extraordinary contributions to academia and the success of his students worldwide.
                  His legacy continues to inspire generations of scholars.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#5D4037',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: '#3E2723'
                    }
                  }}
                  onClick={() => {
                    document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore His Legacy
                </Button>
              </Box>
            </Box>
            <Box>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid white'
                  }}
                  src="/sgtrust/media/images/professor/profile/main-headshot.jpg"
                  alt={t('content:professorName')}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('content:professorName')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {t('content:professorTitle')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 80th Birthday Statue Opening Invitation */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Card sx={{
          background: 'linear-gradient(135deg, #D7CCC8 0%, #BCAAA4 100%)',
          color: '#3E2723',
          p: 6,
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(93, 64, 55, 0.3)'
        }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            🏛️ Memorial Statue Opening Ceremony
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
            Celebrating Professor S. Govindasamy's 80th Birthday
          </Typography>

          {/* Memorial Statue Image with 3D Effect */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4,
            perspective: '1000px'
          }}>
            <Box
              component="img"
              src="/sgtrust/media/images/memorial/statue-sketch.jpg"
              alt="Memorial Statue Design"
              sx={{
                maxWidth: '400px',
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0 20px 40px rgba(93, 64, 55, 0.4), 0 15px 12px rgba(93, 64, 55, 0.3)',
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transition: 'all 0.3s ease',
                border: '3px solid rgba(93, 64, 55, 0.2)',
                '&:hover': {
                  transform: 'rotateX(0deg) rotateY(0deg) scale(1.05)',
                  boxShadow: '0 25px 50px rgba(93, 64, 55, 0.5), 0 20px 20px rgba(93, 64, 55, 0.4)',
                }
              }}
            />
          </Box>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}>
            Join us for the unveiling of the commemorative statue celebrating Professor S. Govindasamy's
            extraordinary life and his dedication to educating and uplifting people from all walks of life.
            A legacy that continues to inspire communities worldwide.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>📅 Date</Typography>
              <Typography variant="body1">September 6th, 2025</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>📍 Location</Typography>
              <Typography variant="body1">Vendakottai Village<br/>Pattukottai Taluk<br/>Thanjavur District</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>🎯 Purpose</Typography>
              <Typography variant="body1">Celebrate His 80th Birthday</Typography>
            </Box>
          </Box>
        </Card>
      </Container>

      {/* Explore Journey Section */}
      <Box id="explore-section" sx={{ backgroundColor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Explore His Journey
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Discover the remarkable life of a man who dedicated himself to educating and uplifting communities through knowledge and compassion.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/about"
                sx={{ py: 2 }}
              >
                About His Life
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/students"
                sx={{ py: 2 }}
              >
                Community Impact
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/achievements"
                sx={{ py: 2 }}
              >
                Achievements
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/timeline"
                sx={{ py: 2 }}
              >
                Life Timeline
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
