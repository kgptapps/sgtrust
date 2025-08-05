import React from 'react';
import {
  Container,
  Typography,
  Box
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

const StudentsPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Profiles and Pictures of SG's Students
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Celebrating the academic legacy through the students Professor S. Govindasamy mentored
        </Typography>
      </Box>

      {/* Content will be added here */}
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Content Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Student profiles and pictures will be added to showcase Professor Govindasamy's academic mentorship legacy.
        </Typography>
      </Box>
    </Container>
  );
};

export default StudentsPage;
