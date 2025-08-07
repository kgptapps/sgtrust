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

      <Paper elevation={3} sx={{ p: 6, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
          A Tribute of Love and Dedication
        </Typography>
        <Typography variant="h6" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 4 }}>
          This memorial website was created with profound love and respect
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          This entire memorial website stands as a heartfelt tribute to Professor S. Govindasamy,
          lovingly created by his grandsons <strong>Kaaviyan Kannaiyan</strong> and <strong>Kadhir Karthikeyan</strong>.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Driven by deep love and respect for their grandfather's extraordinary legacy, they have
          dedicated countless hours to preserve his memory, achievements, and the profound impact
          he had on education and countless lives.
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: 4 }}>
        <Card elevation={3} sx={{ height: '100%' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
              Kaaviyan Kannaiyan
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              With meticulous attention to detail and unwavering dedication, Kaaviyan has worked
              tirelessly to ensure that every aspect of his grandfather's life and achievements
              is accurately documented and beautifully presented.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              His commitment to preserving family history and academic legacy shines through
              every page of this memorial website.
            </Typography>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ height: '100%' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
              Kadhir Karthikeyan
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
              Kadhir's passion for honoring his grandfather's memory is evident in the thoughtful
              curation of content, photographs, and the comprehensive documentation of Professor
              Govindasamy's remarkable journey.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              His dedication ensures that future generations will understand and appreciate
              the profound impact their grandfather had on education and society.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Paper elevation={3} sx={{ p: 6 }}>
        <Typography variant="h5" gutterBottom color="primary.main" sx={{ fontWeight: 600, textAlign: 'center' }}>
          A Labor of Love
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          This website represents more than just a digital memorial—it is a testament to the
          enduring bond between grandfather and grandsons, and their shared commitment to
          education, knowledge, and preserving the legacy of a remarkable educator.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
          Through their efforts, Professor S. Govindasamy's wisdom, achievements, and inspiring
          life story will continue to touch and inspire countless visitors for generations to come.
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main', textAlign: 'center', mt: 4 }}>
          "In honoring our grandfather, we honor the values of education, dedication, and service
          that he embodied throughout his remarkable life."
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, fontStyle: 'italic' }}>
          — Kaaviyan Kannaiyan & Kadhir Karthikeyan
        </Typography>
      </Paper>
    </Container>
  );
};

export default AcknowledgementsPage;
