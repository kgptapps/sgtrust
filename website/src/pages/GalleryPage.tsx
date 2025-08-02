import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation(['content']);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:galleryTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary">
        {t('content:galleryDescription')}
      </Typography>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          Photo gallery will be implemented here
        </Typography>
      </Box>
    </Container>
  );
};

export default GalleryPage;
