import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
  const { t } = useTranslation(['content']);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:contactTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary">
        {t('content:contactDescription')}
      </Typography>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          Contact information and legacy section will be implemented here
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactPage;
