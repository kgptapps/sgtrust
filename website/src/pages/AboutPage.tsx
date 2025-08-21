import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
const AboutPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:aboutTitle')}
      </Typography>
      
      {/* Professor Photo Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Avatar
          sx={{
            width: 300,
            height: 300,
            mx: 'auto',
            mb: 3,
            boxShadow: 4
          }}
          src="/sgtrust/media/images/professor-about-photo.png"
          alt="Professor S. Govindasamy"
        />
        <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
          Professor S. Govindasamy
        </Typography>
        <Typography variant="h5" gutterBottom color="text.secondary" sx={{ fontStyle: 'italic' }}>
          {t('content:professorTitle')}
        </Typography>
      </Box>

      {/* Biography Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="body1" paragraph sx={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
            whiteSpace: 'pre-line',
            mb: 2
          }}>
            {t('content:aboutDescription1')}
          </Typography>

          <Typography variant="body1" paragraph sx={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
            whiteSpace: 'pre-line',
            mb: 2
          }}>
            {t('content:aboutDescription2')}
          </Typography>

          <Typography variant="body1" paragraph sx={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
            whiteSpace: 'pre-line',
            mb: 0
          }}>
            {t('content:aboutDescription3')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutPage;
