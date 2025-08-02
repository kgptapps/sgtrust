import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const StudentsPage: React.FC = () => {
  const { t } = useTranslation(['content']);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        {t('content:studentsTitle')}
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary">
        {t('content:studentsDescription')}
      </Typography>
      
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          Students directory will be implemented here
        </Typography>
      </Box>
    </Container>
  );
};

export default StudentsPage;
