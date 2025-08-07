import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Box,
  Button,
  Grid
} from '@mui/material';

const SGTrustPage: React.FC = () => {

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
        Memorial Tribute
      </Typography>

      {/* MUTA Image - First */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Card sx={{ cursor: 'pointer', maxWidth: 600, mx: 'auto', boxShadow: 3 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/MUTA.jpeg', '_blank')}>
          <CardMedia
            component="img"
            image="/sgtrust/media/images/memorialphotos/MUTA.jpeg"
            alt="Memorial Tribute - MUTA"
            sx={{ objectFit: 'contain', maxHeight: 500 }}
          />
        </Card>
      </Box>

      {/* Three Page Images Side by Side */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/page1.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/sgtrust/media/images/memorialphotos/page1.jpeg"
                alt="Memorial Page 1"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/page2.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/sgtrust/media/images/memorialphotos/page2.jpeg"
                alt="Memorial Page 2"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/page3.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/sgtrust/media/images/memorialphotos/page3.jpeg"
                alt="Memorial Page 3"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* PDF Document at Bottom */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom color="primary.main">
          Memorial Document
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => window.open('/sgtrust/media/images/memorialphotos/pdffile.pdf', '_blank')}
          sx={{ px: 4, py: 2 }}
        >
          View Memorial Document (PDF)
        </Button>
      </Box>
    </Container>
  );
};

export default SGTrustPage;
