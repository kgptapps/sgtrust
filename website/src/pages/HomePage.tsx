import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Avatar,
  useTheme
} from '@mui/material';

import { Link } from 'react-router-dom';
import { trackHeroInteraction, trackMemorialCeremonyInteraction, trackExploreJourneyClick } from '../utils/analytics';

const HomePage: React.FC = () => {
  const theme = useTheme();



  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 40%, ${theme.palette.primary.main}20 100%)`,
          color: theme.palette.text.primary,
          py: 8,
          mb: 6,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}10, transparent 50%, ${theme.palette.secondary.main}05)`,
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" component="h1" gutterBottom>
                Remembering Professor S. Govindasamy
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                A Distinguished Educator and Mentor
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', opacity: 0.8 }}>
                Celebrating the life and legacy of a remarkable professor who dedicated his career to education and mentorship.
              </Typography>

              {/* Memorial and Statue Commemoration */}
              <Box sx={{
                mb: 4,
                p: 3,
                backgroundColor: `${theme.palette.primary.main}15`,
                borderRadius: 2,
                border: `1px solid ${theme.palette.primary.main}30`
              }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500, mb: 1 }}>
                  Memorial Statue Unveiled
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Honoring his 80th birthday and lasting contributions to education
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark
                    }
                  }}
                  onClick={() => {
                    trackHeroInteraction('explore_legacy');
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
                    border: '4px solid white',
                    boxShadow: `0 8px 32px ${theme.palette.primary.main}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}40`
                    }
                  }}
                  src="/media/images/professor-portrait.png"
                  alt="Professor S. Govindasamy"
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Professor S. Govindasamy
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Distinguished Educator & Mentor
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 80th Birthday Statue Opening Invitation */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Card sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.light} 100%)`,
          color: theme.palette.text.primary,
          p: 6,
          textAlign: 'center',
          boxShadow: `0 20px 25px -5px ${theme.palette.primary.main}20, 0 10px 10px -5px ${theme.palette.primary.main}10`,
          border: `1px solid ${theme.palette.primary.main}20`
        }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            🏛️ Memorial Statue Unveiling
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
            Celebrating the Legacy of Professor S. Govindasamy
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
              src="/media/images/memorial/memorialsketch.jpeg"
              alt="Memorial Statue Design"
              onClick={() => trackMemorialCeremonyInteraction('statue_image_click')}
              onMouseEnter={() => trackMemorialCeremonyInteraction('statue_image_hover')}
              sx={{
                maxWidth: '400px',
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                cursor: 'pointer',
                boxShadow: `0 25px 50px -12px ${theme.palette.primary.main}40, 0 0 0 1px ${theme.palette.primary.main}10`,
                transform: 'rotateX(5deg) rotateY(-5deg)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `2px solid ${theme.palette.primary.main}20`,
                '&:hover': {
                  transform: 'rotateX(0deg) rotateY(0deg) scale(1.05)',
                  boxShadow: `0 25px 50px -12px ${theme.palette.primary.main}60, 0 0 0 1px ${theme.palette.primary.main}20`,
                }
              }}
            />
          </Box>

          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', maxWidth: '800px', mx: 'auto' }}>
            Join us in honoring Professor S. Govindasamy's remarkable legacy with the unveiling of his memorial statue, celebrating his 80th birthday and lifetime of dedication to education.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ textAlign: 'center', minWidth: '200px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, minHeight: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📅 Date
              </Typography>
              <Typography variant="body1" sx={{ minHeight: '24px' }}>September 6, 2025</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', minWidth: '250px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, minHeight: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📍 Location
              </Typography>
              <Typography
                variant="body1"
                component="a"
                href="https://maps.app.goo.gl/search/Vendakottai+Village+Pattukottai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMemorialCeremonyInteraction('location_map_click')}
                sx={{
                  whiteSpace: 'pre-line',
                  textDecoration: 'underline',
                  color: 'primary.main',
                  cursor: 'pointer',
                  fontWeight: 500,
                  display: 'inline-block',
                  p: 1,
                  borderRadius: 1,
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  minHeight: '72px',
                  lineHeight: 1.4,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'primary.dark',
                    transform: 'scale(1.02)'
                  }
                }}
              >
                Vendakottai Village, Pattukottai
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', minWidth: '200px' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, minHeight: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🎯 Purpose
              </Typography>
              <Typography variant="body1" sx={{ minHeight: '24px' }}>Memorial Statue Unveiling</Typography>
            </Box>
          </Box>
        </Card>
      </Container>

      {/* Explore Journey Section */}
      <Box id="explore-section" sx={{ backgroundColor: theme.palette.background.default, py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Explore His Journey
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Discover the remarkable life and achievements of Professor S. Govindasamy through different aspects of his legacy.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/about"
                onClick={() => trackExploreJourneyClick('/about')}
                sx={{ py: 2 }}
              >
                About His Life
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/students"
                onClick={() => trackExploreJourneyClick('/students')}
                sx={{ py: 2 }}
              >
                Community Impact
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/achievements"
                onClick={() => trackExploreJourneyClick('/achievements')}
                sx={{ py: 2 }}
              >
                Achievements
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/timeline"
                onClick={() => trackExploreJourneyClick('/timeline')}
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
