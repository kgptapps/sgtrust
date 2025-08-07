import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Box,
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
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box
          component="img"
          src="/sgtrust/media/images/memorialphotos/MUTA.jpeg"
          alt="Memorial Tribute - MUTA"
          onClick={() => window.open('/sgtrust/media/images/memorialphotos/MUTA.jpeg', '_blank')}
          sx={{
            cursor: 'pointer',
            maxWidth: '100%',
            width: '800px',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 1
          }}
        />
      </Box>

      {/* Three Page Images Side by Side */}
      <Box sx={{ mb: 4 }}>
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

      {/* PDF Images at Bottom */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/pdf1.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/sgtrust/media/images/memorialphotos/pdf1.jpeg"
                alt="Memorial PDF Document 1"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ cursor: 'pointer', boxShadow: 2 }} onClick={() => window.open('/sgtrust/media/images/memorialphotos/pdf2.jpeg', '_blank')}>
              <CardMedia
                component="img"
                height="400"
                image="/sgtrust/media/images/memorialphotos/pdf2.jpeg"
                alt="Memorial PDF Document 2"
                sx={{ objectFit: 'contain' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SGTrustPage;
