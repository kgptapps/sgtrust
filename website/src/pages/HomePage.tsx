import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar
} from '@mui/material';
import {
  School as SchoolIcon,
  EmojiEvents as AwardIcon,
  Groups as StudentsIcon,
  Public as GlobalIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { t } = useTranslation(['content', 'navigation']);

  const stats = [
    {
      icon: <StudentsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      number: '50+',
      label: t('content:phdStudents'),
      description: t('content:phdStudentsDesc')
    },
    {
      icon: <GlobalIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      number: '80%',
      label: t('content:usaSuccess'),
      description: t('content:usaSuccessDesc')
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      number: '40+',
      label: t('content:yearsTeaching'),
      description: t('content:yearsTeachingDesc')
    },
    {
      icon: <AwardIcon sx={{ fontSize: 40, color: 'error.main' }} />,
      number: '25+',
      label: t('content:awards'),
      description: t('content:awardsDesc')
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)',
          color: 'white',
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
                {t('content:welcomeSubtitle')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.8 }}>
                {t('content:heroDescription')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/about"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'grey.100'
                    }
                  }}
                >
                  {t('navigation:about')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/students"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {t('navigation:students')}
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

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          {t('content:impactNumbers')}
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4, color: 'text.secondary' }}>
          {t('content:impactDescription')}
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {stats.map((stat, index) => (
            <Box key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ mb: 1, color: 'primary.main' }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {t('content:exploreJourney')}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              {t('content:exploreDescription')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/timeline"
              >
                {t('navigation:timeline')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/gallery"
              >
                {t('navigation:gallery')}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
