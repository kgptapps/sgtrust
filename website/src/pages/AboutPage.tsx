import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation(['content']);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:aboutTitle')}
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, gap: 6, mt: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 250,
              height: 250,
              mx: 'auto',
              mb: 3
            }}
            src="/sgtrust/media/images/professor/profile/main-headshot.jpg"
            alt="Professor S. Govindasamy"
          />
        </Box>

        <Box>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="primary">
                Professor S. Govindasamy
              </Typography>
              <Typography variant="h6" gutterBottom color="text.secondary">
                {t('content:professorTitle')}
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                {t('content:aboutDescription1')}
              </Typography>
              
              <Typography variant="body1" paragraph>
                {t('content:aboutDescription2')}
              </Typography>
              
              <Typography variant="body1" paragraph>
                {t('content:aboutDescription3')}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
