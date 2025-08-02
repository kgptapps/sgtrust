import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
      
      <Grid container spacing={6} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
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
        </Grid>
        
        <Grid item xs={12} md={8}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
