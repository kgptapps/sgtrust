import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Divider
} from '@mui/material';

const AcknowledgementsPage: React.FC = () => {

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: 'primary.main',
          fontWeight: 600,
          mb: 4
        }}
      >
        Acknowledgements
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Gratitude and Recognition
        </Typography>
        <Typography variant="body1" paragraph>
          This memorial website is a tribute to Professor S. Govindasamy's extraordinary 
          life and contributions to education. We extend our heartfelt gratitude to all 
          who have made this project possible.
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
        <Card elevation={2} sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary.main">
              Family Members
            </Typography>
            <Typography variant="body2" paragraph>
              We are deeply grateful to the family members of Professor S. Govindasamy
              who provided invaluable photographs, documents, and personal insights
              that made this comprehensive tribute possible.
            </Typography>
            <Typography variant="body2">
              Their dedication to preserving his memory and sharing his story with
              the world is truly commendable.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary.main">
              Former Students
            </Typography>
            <Typography variant="body2" paragraph>
              Special thanks to the former students who shared their memories,
              testimonials, and experiences with Professor Govindasamy.
            </Typography>
            <Typography variant="body2">
              Their stories illuminate the profound impact he had on countless
              lives and careers.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary.main">
              Academic Colleagues
            </Typography>
            <Typography variant="body2" paragraph>
              We acknowledge the contributions of fellow academics and colleagues
              who worked alongside Professor Govindasamy.
            </Typography>
            <Typography variant="body2">
              Their professional insights and shared memories have enriched
              this memorial significantly.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary.main">
              Institutional Support
            </Typography>
            <Typography variant="body2" paragraph>
              Gratitude to the University of Madras and other institutions
              for providing access to archives and historical records.
            </Typography>
            <Typography variant="body2">
              Their cooperation has been essential in documenting his
              academic journey and achievements.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Technical Acknowledgements
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          This website was developed with modern web technologies to ensure 
          accessibility, responsiveness, and long-term preservation of Professor 
          Govindasamy's legacy.
        </Typography>
        <Typography variant="body1" paragraph>
          We acknowledge the open-source community and the various libraries 
          and frameworks that made this project possible.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom color="primary.main">
          Continuing Legacy
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" paragraph>
          This memorial website stands as a testament to Professor S. Govindasamy's 
          enduring impact on education and research. We hope it serves as an 
          inspiration for future generations of educators and students.
        </Typography>
        <Typography variant="body1">
          We invite visitors to share their own memories and stories to keep 
          his legacy alive for years to come.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AcknowledgementsPage;
