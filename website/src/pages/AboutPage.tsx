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
        About Professor S. Govindasamy
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
          Distinguished Educator & Mentor
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
            Professor S. Govindasamy was a distinguished educator who dedicated his life to academic excellence and student mentorship. Throughout his remarkable career, he guided over 50 PhD students to success, many of whom have achieved prominent positions in universities and research institutions worldwide.
          </Typography>

          <Typography variant="body1" paragraph sx={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
            whiteSpace: 'pre-line',
            mb: 2
          }}>
            His commitment to education extended beyond the classroom, as he actively contributed to research and academic development. Professor Govindasamy's innovative teaching methods and dedication to student success made him a beloved figure in the academic community.
          </Typography>

          <Typography variant="body1" paragraph sx={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
            whiteSpace: 'pre-line',
            mb: 0
          }}>
            This memorial website serves as a tribute to his lasting legacy and the profound impact he had on education. Through his students' achievements and continued contributions to society, Professor Govindasamy's influence continues to inspire future generations of scholars and educators.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutPage;
