import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper
} from '@mui/material';
import {
  School as EducationIcon,
  Favorite as HeartIcon,
  AccountBalance as FundIcon
} from '@mui/icons-material';

const AccountabilityPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <FundIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Professor S. Govindasamy Educational Endowment Fund
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Honoring his legacy through educational support for future generations
        </Typography>
      </Box>

      {/* Memorial Message */}
      <Card sx={{ mb: 6, backgroundColor: 'grey.50' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <HeartIcon sx={{ fontSize: 32, color: 'error.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="primary.main">
              In Loving Memory
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            The sudden and unexpected loss of our beloved Professor, mentor, friend, and guiding light to cardiac arrest in Chennai
            remains difficult to comprehend. Though Professor S. Govindasamy has departed from this physical world, his profound
            love, wisdom, and dedication continue to live within each of us. We find comfort knowing that his spirit watches over
            our endeavors and well-being from above.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            In tribute to his extraordinary life and unwavering commitment to education, we have embarked on establishing the
            Professor S. Govindasamy Educational Endowment Fund. This initiative serves as a lasting testament to his belief
            in the transformative power of education and his lifelong dedication to nurturing young minds.
          </Typography>
        </CardContent>
      </Card>

      {/* Fund Mission */}
      <Card sx={{ mb: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <EducationIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h5" component="h2" color="primary.main">
              Educational Mission & Vision
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            The Professor S. Govindasamy Educational Endowment Fund is designed to provide meaningful support to deserving
            students pursuing Master's degrees and research opportunities. Our primary focus centers on assisting students
            from rural communities and economically disadvantaged backgrounds, ensuring that financial constraints do not
            hinder their academic aspirations.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            Beyond student support, our vision encompasses providing research funding to emerging young scientists who
            demonstrate exceptional promise but face financial barriers. Additionally, we remain open to developing innovative
            educational initiatives and programs within the Department of Biochemistry at the University of Chennai, guided
            by contributions and suggestions from Professor Govindasamy's students and colleagues.
          </Typography>
        </CardContent>
      </Card>


    </Container>
  );
};

export default AccountabilityPage;
