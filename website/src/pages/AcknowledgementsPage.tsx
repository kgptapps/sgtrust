import React from 'react';
import {
  Container,
  Typography,
  Paper,
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
